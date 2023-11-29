<template>
    <section class="container">
        <div class="row">
            <div class="col col-lg-5 px-sm-0 copy">
                <ul>
                    <li v-for="copy in copies" :key="copy.h3">
                        <div class="header-wrapper">
                            <img src="@/../public/svg-icons/arrow.svg" alt="" />
                            {{ copy.h3 }}
                        </div>
                        <p>{{ copy.p }}</p>
                    </li>
                    <li class="auth-img"><img src="@/../public/auth/rocket.png" alt="rocket"></li>
                </ul>
            </div>
            <div class="col col-lg-5">
                <form @submit.prevent="submitForm" class="auth-form">
                    <div class="form-content-wrapper">
                        <h2>Create your Stripe account</h2>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="email-label">Email</label>
                            <input v-model="signupData.email" type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter email">
                            <span class="email-error" v-if="invalidEmail">
                                <i class="fa-solid fa-circle-exclamation"></i>
                                Invalid
                                email address</span>
                        </div>
                        <!-- bootstrap 5 中已移除form-row class -->
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="first-name">First Name</label>
                                <input v-model="signupData.firstName" type="text" class="form-control" id="first-name"
                                    placeholder="First Name">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="last-name">Last Name</label>
                                <input v-model="signupData.lastName" type="text" class="form-control" id="last-name"
                                    placeholder="Last Name">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="password-wrapper">
                                <label for="exampleInputPassword1">Password</label>
                            </div>
                            <span class="password-field">
                                <input v-model="signupData.password" :type="showPassword ? 'text' : 'password'"
                                    class="form-control" id="exampleInputPassword1" placeholder="Password">
                                <i @click="togglePassword" class="fa-regular eye fa-eye show" v-if="showPassword"></i>
                                <i @click="togglePassword" class="fa-regular eye fa-eye-slash" v-else></i>
                            </span>

                        </div>
                        <button type="submit" class="btn submit-btn">Continue</button>
                        <hr class="hr-text" data-content="Or">
                        <button class="btn google-login">
                            <span class="google-button-text-wrapper">
                                <img src="@/../public/auth/google-icon.png" alt="google-icon"><span>Continue With
                                    Google</span>
                            </span>
                        </button>
                        <div class="create-account-text">
                            <p>Have an account?<span><router-link to="/" class="sign-up-link">Sign
                                        in</router-link></span>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { Ref, ref, reactive } from "vue";
import isValidEmail from "@/utils/validateEmail.ts";
import isValidUsername from "@/utils/validateUsername.ts";
const copies = ref([
    {
        h3: "Get started quickly",
        p: "Integrate with developer-friendly APIs or choose low-code or pre-built solutions."
    },
    {
        h3: "Support any business model",
        p: "E-commerce, subscriptions, SaaS platforms, marketplaces, and more—all within a unified platform."
    },
    {
        h3: "Join millions of businesses",
        p: "Stripe is trusted by ambitious startups and enterprises of every size.",
    }
])
const invalidEmail: Ref<boolean> = ref(false);
const showPassword: Ref<boolean> = ref(false);
interface signupForm {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
};

const signupData: signupForm = reactive({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
})

const togglePassword = (): void => {
    showPassword.value = !showPassword.value;
}

const submitForm = async (): Promise<any> => {
    const validEmail = isValidEmail(signupData.email);
    const validFirstName = isValidUsername(signupData.firstName);
    const validLastName = isValidUsername(signupData.lastName);
    if (!validEmail || signupData.password === "") {
        invalidEmail.value = true;
        return;
    } else {

    }
}
</script>
<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 100px auto;

    .row {
        justify-content: space-around;

    }

    li {
        list-style-type: none;
        font-size: 1.05rem;
        font-weight: 700;
        color: $main-text-color;
        margin-bottom: 30px;

        .header-wrapper {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        img {
            display: inline-block;
            width: 1rem;
        }

        p {
            font-weight: 400;
            font-size: 0.9rem;
            padding-left: 25px;
            color: $miner-text-color;
        }
    }

    .auth-img {
        display: flex;
        justify-content: center;
        margin-top: 50px;

        img {
            width: 70%;
            box-shadow: $light-card-shadow;
            border-radius: 50%;
        }
    }

    .auth-form {

        /* width: 550px; */
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

        .form-row {
            display: flex;
            /* justify-content: space-between; */
        }

        label {
            font-size: 0.875rem;
            font-weight: 600;
            color: $miner-text-color;
        }

        .email-label {
            margin-bottom: 5px;
        }
        i {
            padding-right: 3px;
        }
        .form-content-wrapper {
            width: 95%;
            margin: 0 auto;
        }

        svg {
            width: 14px;
            height: 14px;
        }

        .email-error {
            margin-top: 6px;
            color: #cd3d64;
            font-size: 14px;
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
                /* transform: translateY(-50%); */
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
        position: relative;


    }

    .google-login {
        width: 100%;
        border: none;
        background-color: white;
        color: $miner-text-color;
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
                /* color: $miner-text-color; */
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
        margin-top: 50px;

        .copy {
            display: none;
        }

        .auth-form {
            padding: 30px 10px;

            h2 {
                font-size: 1.4rem;
            }

            p {
                margin-bottom: 0;
            }
        }
    }

}
</style>