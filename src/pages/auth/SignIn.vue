<template>
    <section class="container">
        <form @submit.prevent="submitForm" class="auth-form">
            <div class="form-content-wrapper">
                <h2>Sign in to your account</h2>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="email-label">Email</label>
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email" v-model="loginData.email" required>
                    <span v-if="invalidEmail" class="email-error"><i class="fa-solid fa-circle-exclamation"></i>Invalid
                        email address</span>
                </div>
                <div class="form-group">
                    <div class="password-wrapper">
                        <label for="exampleInputPassword1">Password</label>
                        <!-- <span><router-link to="/" class="forgot-password">Forgot Your Password ?</router-link> </span> -->
                    </div>
                    <div class="password-field">
                        <input :type="showPassword ? 'text' : 'password'" class="form-control" id="exampleInputPassword1"
                            placeholder="Password" v-model="loginData.password" required>
                        <i v-if="showPassword" @click="togglePassword" class="fa-regular eye fa-eye show"></i>
                        <i v-else @click="togglePassword" class="fa-regular eye fa-eye-slash"></i>
                    </div>
                    <span v-if="incorrectData" class="email-error"><i class="fa-solid fa-circle-exclamation"></i>Incorrect
                        email or password</span>
                </div>
                <button :disabled="isLoading" type="submit" class="btn submit-btn">{{ isLoading ? "Validating..." :
                    "Continue" }}</button>
                <hr class="hr-text" data-content="Or">
                <button class="btn google-login" @click="continueWithGoogle" :disabled="diableGoogleButton">
                    <span class="google-button-text-wrapper">
                        <img src="@/../public/auth/google-icon.png" alt="google-icon"><span>Continue With
                            Google</span>
                    </span>
                </button>
                <div class="create-account-text">
                    <p>Don't have an account?<span><router-link to="/signup" class="sign-up-link">Sign
                                up</router-link></span>
                    </p>
                </div>
            </div>
        </form>
    </section>
</template>
<script setup lang="ts">
import { Ref, ref, reactive, computed, onMounted } from "vue";
import { storeKey, useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import isValidEmail from "@/utils/validateEmail";
const store = useStore();
const route = useRoute();
const router = useRouter();
const invalidEmail: Ref<boolean> = ref(false);
const showPassword: Ref<boolean> = ref(false);
const isLoading: Ref<boolean> = ref(false);
const diableGoogleButton: Ref<boolean> = ref(false);
const incorrectData: Ref<boolean> = ref(false);
interface loginForm {
    email: string,
    password: string,
};
const loginData: loginForm = reactive({
    email: "",
    password: "",
})

const togglePassword = (): void => {
    showPassword.value = !showPassword.value;
}
const submitForm = async (): Promise<any> => {
    invalidEmail.value = false;
    incorrectData.value = false;
    if (isLoading.value) {
        return 
    }; 
    isLoading.value = true;
    const isValid = isValidEmail(loginData.email);
    if (!isValid || loginData.password === "") {
        isLoading.value = false;
        invalidEmail.value = true;
        return;
    } else {
        try {
            await store.dispatch("login", loginData);
            await new Promise(resolve => setTimeout(resolve, 1000));
            isLoading.value = false;
            setTimeout(() => {
                const redirectUrl = "/" + (route.query.redirect || "coaches");
                router.replace(redirectUrl);
            }, 500);
        } catch (error) {
            isLoading.value = false;
            incorrectData.value = true;
        }
    };
}

const isAuthenticated = computed((): boolean => {
    return localStorage.getItem("token") !== null && localStorage.getItem("userId") !== null;
})

const continueWithGoogle = async (): Promise<any> => {
    try {
        await store.dispatch("signInWithGoogle");
        const loggedIn = isAuthenticated;
        if (loggedIn) {
            const redirectUrl = "/" + (route.query.redirect || "coaches");
            router.replace(redirectUrl);
        }
    } catch (error) {
        console.log(error);
    }
}



</script>
<style scoped lang="scss">
.container {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    margin-top: 100px;

    .auth-form {

        width: 550px;
        background-color: white;
        border-radius: 10px;
        padding: 56px 48px;
        box-shadow: $light-card-shadow;

        h2 {
            font-size: 1.65rem;
            text-align: left;
            color: #3c4257;
            font-weight: 700;
            margin-bottom: 20px;
        }

        label {
            font-size: 0.875rem;
            font-weight: 600;
            color: $minor-text-color;
        }

        .email-label {
            margin-bottom: 5px;
        }

        .form-content-wrapper {
            width: 95%;
            margin: 0 auto;
        }

        .email-error {
            margin-top: 6px;
            color: #cd3d64;
            font-size: 14px;

            i {
                padding-right: 7px;
                font-size: 13px;
            }
        }

        .form-group {
            margin-bottom: 25px;
        }

        .password-field {
            position: relative;

            .eye {
                position: absolute;
                right: 0.7rem;
                top: 32%;
                cursor: pointer;
                color: lightgray;
            }
        }
    }

    .submit-btn {
        background-color: $main-purple;
        color: white;
        border: none;
        width: 100%;
        margin-top: 8px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    }

    .submit-btn:hover {
        background-color: #7a3cff;
    }

    .forgot-password {
        text-decoration: none;
        color: #5469D4;
        font-size: 0.875rem;
        font-weight: 600;
    }

    .forgot-password:hover {
        color: $main-text-color;
    }

    .password-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
    }

    .google-login {
        width: 100%;
        border: none;
        background-color: white;
        /* color: $minor-text-color; */
        box-shadow: $light-card-shadow;
        /* border-radius: 10px; */
        line-height: 24px;

        img {
            width: 16px;
        }

        .google-button-text-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        &:hover {
            background-color: #f3f3f3;
        }
    }

    .create-account-text {
        margin-top: 15px;

        p {
            display: flex;
            gap: 10px;
            align-items: center;

            a {
                text-decoration: none;
                /* color: $minor-text-color; */
            }
        }
    }
}

.hr-text {
    line-height: 1em;
    position: relative;
    outline: 0;
    border: 0;
    color: black;
    text-align: center;
    height: 1.5em;
    opacity: .5;

    &:before {
        content: '';
        background: linear-gradient(to right, transparent, #818078, transparent);
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
    }

    &:after {
        content: attr(data-content);
        position: relative;
        display: inline-block;
        color: black;

        padding: 0 .5em;
        line-height: 1.5em;
        color: #818078;
        background-color: #fcfcfa;
    }
}

@media (max-width:768px) {
    .container {
        .auth-form {
            padding: 25px 20px;
        }
    }
}
</style>