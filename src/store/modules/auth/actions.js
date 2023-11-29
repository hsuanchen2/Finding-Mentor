import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// 透過logintimer來控制計時器
let loginTimer;
export default {
  // firebase google authentication
  async signInWithGoogle(context) {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(getAuth(), provider);
      const responseData = userCredential._tokenResponse;
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
      });
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
    const mode = payload.mode;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCL5a4JjWpnQbQygwWUKyt9eOTMQSCLiSs";
    if (mode === "signup") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCL5a4JjWpnQbQygwWUKyt9eOTMQSCLiSs";
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to authenticate");
      throw error;
    }
    // 將token, userId, tokenexpiration 存入localStorage
    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);

    const expiresIn = +responseData.expiresIn * 1000;
    // const expiresIn = 5000;
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
    });
  },

  //
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
