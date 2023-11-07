<template>
    <section class="container">
        <form @submit.prevent="submitForm" class="auth-form">
            <div class="form-content-wrapper">
                <h2>Sign in to your account</h2>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="email-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email">
                    <span class="email-error" v-if="invalidEmail">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f50000"
                            stroke-width="0.00024000000000000003">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                stroke="#CCCCCC" stroke-width="1.8719999999999999"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z"
                                    fill="#fe4343"></path>
                            </g>
                        </svg>
                        Please enter your email</span>
                </div>
                <div class="form-group">
                    <div class="password-wrapper">
                        <label for="exampleInputPassword1">Password</label>
                        <span><router-link to="/" class="forgot-password">Forgot Your Password ?</router-link> </span>
                    </div>
                    <span class="password-field">
                        <input :type="showPassword ? 'text' : 'password'" class="form-control"
                            id="exampleInputPassword1" placeholder="Password">
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
                    <p>Don't have an account?<span><router-link to="/" class="sign-up-link">Sign up</router-link></span>
                    </p>
                </div>
            </div>
        </form>
    </section>
</template>
<script setup>
    import { ref, reactive, computed } from "vue";
    import { useStore } from "vuex";
    import { useRouter, useRoute } from "vue-router";
    const invalidEmail = ref(false);
    const showPassword = ref(false);
    const togglePassword = () => {
        showPassword.value = !showPassword.value;
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
                color: $miner-text-color;
            }

            .email-label {
                margin-bottom: 5px;
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
            .auth-form {
                padding: 25px 20px;
            }
        }
    }
</style>