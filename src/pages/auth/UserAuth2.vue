<template>
    <section class="container">
        <form @submit.prevent="submitForm" class="auth-form">
            <div class="form-content-wrapper">
                <h2>Sign in to your account</h2>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email">
                </div>
                <div style="padding-top: 20px;"></div>
                <div class="form-group">
                    <div style="display: flex; justify-content: space-between;">
                        <label for="exampleInputPassword1">Password</label>
                        <span><router-link to="/" class="forgot-password">Forgot Your Password ?</router-link> </span>
                    </div>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div style="padding-top: 40px;"></div>
                <button type="submit" class="btn submit-btn">Login</button>
            </div>
        </form>
    </section>
</template>
<script setup>
    import { ref, reactive, computed } from "vue";
    import { useStore } from "vuex";
    import { useRouter, useRoute } from "vue-router";
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
            padding: 20px 20px;
            background-color: white;
            border-radius: 10px;
            padding: 56px 48px;
            box-shadow: $light-card-shadow;

            h2 {
                font-size: 1.65rem;
                text-align: left;
                color: $main-text-color;
                font-weight: 700;
                margin-bottom: 20px;
            }

            label {
                margin-bottom: 5px;
                font-size: 0.875rem;
                font-weight: 600;
                color: $miner-text-color;
            }

            .form-content-wrapper {
                width: 95%;
                margin: 0 auto;
            }
        }

        .submit-btn {
            background-color: $main-purple;
            color: white;
            border: none;
            width: 100%;
        }

        .forgot-password {
            text-decoration: none;
            color: #5469D4;
            font-size: 0.875rem;
            font-weight: 600;
        }
    }
</style>