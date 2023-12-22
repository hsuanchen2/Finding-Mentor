<template>
    <header>
        <nav class="mobile-nav">
            <div class="nav-brand">
                <router-link to="/" class="navbar-brand">Finding Mentor</router-link>
                <button @click="closeMenu">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/coaches" class="nav-link" @click="closeMenu"><i
                            class="fa-solid fa-house"></i>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/talents" class="nav-link" @click="closeMenu"><i
                            class="fa-solid fa-magnifying-glass"></i>Find Mentors</router-link>
                </li>
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/requests" class="nav-link" @click="closeMenu"><i
                            class="fa-regular fa-envelope"></i>Your Requests</router-link>
                </li>
                <li class="nav-item register-button" v-if="!isLoggedIn">
                    <router-link to="/signUp" class="nav-link" @click="closeMenu"><i
                            class="fa-regular fa-address-card"></i>Register
                    </router-link>
                </li>
                <li class="nav-item" v-if="!isLoggedIn">
                    <router-link to="/signIn" class="nav-link" @click="closeMenu"><i
                            class="fa-solid fa-arrow-right-to-bracket"></i>Login</router-link>
                </li>
                <li class="nav-item" v-if="isLoggedIn">
                    <a @click="logOut"><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</a>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup lang="ts">
import { Ref, ref, computed, onMounted, defineEmits } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { emit } from "process";
const emits = defineEmits(["close-nav"]);
const store = useStore();
const router = useRouter();
const windowWidth = ref(window.innerWidth);
const isLoggedIn = computed(() => {
    return store.getters.isAuthenticated;
});

const showNav: Ref<boolean> = ref(false);
const mobileDropdown: Ref<null | HTMLElement> = ref(null);

const logOut = () => {
    store.dispatch("logout");
    router.replace("/coaches");
    closeMenu();
};

const toggleNav = () => {
    showNav.value = !showNav.value;
};

const handleResize = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value > 768) {
        closeMenu();
    }
};

const closeMenu = () => {
    emits("close-nav");
}


onMounted(() => {
    window.addEventListener("resize", handleResize);
});

</script>
  
<style scoped lang="scss">
.mobile-nav {
    width: 95%;
    position: absolute;
    border-radius: 10px;
    box-shadow: $light-card-shadow;
    margin-left: auto;
    margin-right: auto;
    top: 15px;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 100;
    padding: 15px 4px 4px 4px;

    .nav-brand {
        display: flex;
        justify-content: space-between;

        button {
            border: none;
            background: none;
            padding-right: 12px;

            .fa-solid.fa-xmark {
                font-size: 20px;
                color: $miner-text-color;
            }
        }
    }

    .navbar-brand {
        font-size: 1.2rem;
        font-weight: 400;
        padding-left: 20px;
        padding-right: 20px;
    }

    ul.navbar-nav {
        background-color: #F6F9FB;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-top: 6px;

        li {
            color: $miner-text-color;
            transition: 0.3s ease;
            position: relative;

            a {
                padding-left: 20px;
                line-height: 2.5;
            }

            i {
                margin-right: 10px;
            }

            &:hover {
                color: #909090;
                cursor: pointer;
            }

            &:not(:last-of-type)::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: linear-gradient(90deg, rgba(66, 71, 112, 0.09), rgba(66, 71, 112, 0.09), transparent 50%, transparent);
                background-size: 5px 0.1px;
            }
        }
    }

}
</style>