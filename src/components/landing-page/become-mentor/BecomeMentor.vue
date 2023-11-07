<template>
    <section class="container">
        <div class="row">
            <p class="text-start">Become a mentor</p>
            <div class="col col-sm-5 col-12 main-text">
                <h2>Show someone the ropes!</h2>
                <p class="copy">Empower others on their career journey with your expertise.
                    Create an account instantly.
                    You can also contact us to design a custom package for your mentorship services.</p>
                <base-button link>Get Started</base-button>
            </div>
            <div class="col col-sm-3 col-12 miner-text">
                <img src="@/../public/svgs/rope.svg" alt="">
                <h3 class="subtitle">Create an account</h3>
                <p>Register to become a mentor and prepare your profile in just 3 minutes</p>
                <router-link to="/" class="cta-button">Try out <i class="fas fa-arrow-right"></i></router-link>
            </div>
            <div class="col col-sm-3 col-12 miner-text">
                <img src="@/../public/svgs/profile.svg" alt="">
                <h3 class="subtitle">Share your expertise</h3>
                <p>Show thousands of potential clients your profile and start working together</p>
                <router-link to="/" class="cta-button">Try out <i class="fas fa-arrow-right"></i></router-link>
            </div>
        </div>
    </section>
</template>
<script setup></script>
<style scoped lang="scss">
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 50px;

        .row {
            justify-content: space-between;
        }

        h2 {
            font-weight: 700;
            color: $main-text-color;
            font-size: 2rem;
            margin-bottom: 20px;
        }

        .text-start {
            color: $main-purple;
            font-weight: 700;
        }

        .copy {
            font-size: 1.1rem;
            color: $miner-text-color;
            margin-bottom: 30px;
        }

        .miner-text {
            .subtitle {
                font-size: 1.2rem;
                color: $main-text-color;
                font-weight: 700;
            }

            p {
                color: $miner-text-color;
            }
        }

        img {
            width: 15%;
            margin-bottom: 15px;
        }

        .cta-button {
            text-decoration: none;
            color: $main-purple;
            font-weight: 700;
            position: relative;
            transition: background-color 300ms ease-out;

            a {
                text-decoration: none;
                position: relative;
            }

            i {
                opacity: 0;
                transition: 0.3s ease;
                font-size: 12px;
                margin-left: 3px;
            }

            &:hover i {
                opacity: 1;
            }
        }

        @media (max-width:576px) {
            .row {
                gap: 30px;
            }
        }
    }
</style>