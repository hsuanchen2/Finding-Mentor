import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

// 透過logintimer來控制計時器
let loginTimer;
export default {
  // firebase google authentication
  async signInWithGoogle(context) {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(getAuth(), provider);
      if (userCredential.user) {
        // store user data to db
        const responseData = userCredential._tokenResponse;
        const dbApi = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY;
        const uid = responseData.localId;
        const token = responseData.idToken;
        const userData = {
          firstName: responseData.firstName,
          lastName: responseData.lastName,
          userId: uid,
        }
        const storeUserDataToDb = await fetch(`${dbApi}/users/${uid}.json?auth=` +
          token, {
          method: "PUT",
          body: JSON.stringify(userData),
        })
        localStorage.setItem("token", responseData.idToken);
        localStorage.setItem("userId", responseData.localId);
        const expiresIn = +responseData.expiresIn * 1000;
        const expireDate = new Date().getTime() + expiresIn;
        localStorage.setItem("tokenExpiration", expireDate);

        // 定時自動登出
        loginTimer = setTimeout(() => {
          context.dispatch("autoLogout");
        }, expiresIn);

        //傳資料到setuser mutations中
        context.commit("setUser", {
          token: responseData.idToken,
          userId: responseData.localId,
          tokenExpiration: expireDate,
        })
      } else {
        // const responseData = await response.json();
        const error = new Error("Failed to authenticate");
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  },

  // 登入
  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },

  // 註冊
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },

  // 登出
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearInterval(loginTimer);

    context.commit("setUser", {
      userId: null,
      token: null,
    });
  },
  // 從localStorage 抓取登入資料
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const expiresIn = +tokenExpiration - new Date().getTime();
    // 若token過期則不登入
    if (expiresIn < 0) {
      return;
      // 若沒過期，則先設定自動登出時間，再做登入。
    } else {
      loginTimer = setTimeout(() => {
        context.dispatch("autoLogout");
      }, expiresIn);
    }

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
        // tokenExpiration: null,
      });
    }
  },

  //將登入以及註冊重複的部分統稱叫做auth
  async auth(context, payload) {
    try {
      const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
      const mode = payload.mode;
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
      if (mode === "signup") {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error.message);
      }

      const responseData = await response.json();
      const { localId, idToken, expiresIn } = responseData;

      const dbApi = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY;
      const userData = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        userId: localId,
      };
      // put user data to db only when mode is signup
      if (mode === "signup") {
        await fetch(`${dbApi}/users/${localId}.json?auth=${idToken}`, {
          method: "PUT",
          body: JSON.stringify(userData)
        });
      }

      localStorage.setItem("token", idToken);
      localStorage.setItem("userId", localId);
      const expireDate = new Date().getTime() + (+expiresIn * 1000);
      localStorage.setItem("tokenExpiration", expireDate);

      loginTimer = setTimeout(() => {
        context.dispatch("autoLogout");
      }, +expiresIn * 1000);

      context.commit("setUser", {
        token: idToken,
        userId: localId,
        tokenExpiration: expireDate,
      });
    } catch (error) {
      throw error.message;
    }
  },

  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
