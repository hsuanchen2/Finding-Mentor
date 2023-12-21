<template>
  <header>
    <transition name="fade">
      <mobileNav v-if="isMobile" @close-nav="toggleNav"></mobileNav>
    </transition>
    <nav class="navbar navbar-expand-md">
      <router-link to="/" class="navbar-brand">Finding Mentor</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: showNav, leave: !showNav }" id="navbarNav"
        ref="mobileDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/coaches" class="nav-link" @click="closeMenu">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/coaches" class="nav-link" @click="closeMenu">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMenu">Pricing</router-link>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item" v-if="isLoggedIn">
            <router-link to="/requests" class="nav-link" @click="closeMenu">Your Requests</router-link>
          </li>
          <li class="nav-item register-button" v-if="!isLoggedIn">
            <router-link to="/signUp" class="nav-link" @click="closeMenu">Register
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/signIn" class="nav-link" @click="closeMenu">Login</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <base-button @click="logOut">Logout</base-button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Ref, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import mobileNav from "./MobileNav.vue";

const store = useStore();
const router = useRouter();
const windowWidth = ref(window.innerWidth);
const isMobile = ref(false);
const isLoggedIn = computed(() => {
  return store.getters.isAuthenticated;
});

const showNav: Ref<boolean> = ref(false);
const mobileDropdown: Ref<null | HTMLElement> = ref(null);

const logOut = () => {
  store.dispatch("logout");
  router.replace("/coaches");
};

const toggleNav = () => {
  // showNav.value = !showNav.value
  console.log("123");
  isMobile.value = !isMobile.value;
};

const closeMenu = () => {
  showNav.value = false;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value > 768) {
    closeMenu();
  }
};


onMounted(() => {
  window.addEventListener("resize", handleResize);
});

</script>

<style scoped lang="scss">
header {
  font-family: "Roboto", sans-serif;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;

  a {
    display: block;
    /* padding: 0.75rem 1.5rem; */
    border: 1px solid transparent;
    border-radius: 5px;
  }

  button {
    margin-right: 1.5rem;
  }
}

header .navbar {
  width: 100%;
  max-width: 1200px;
  /* // border: 1px solid red; */
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;

  .navbar-brand {
    font-weight: 700;
  }

  .navbar-collapse {
    justify-content: space-between;
  }

  .navbar-collapse.show {
    background-color: white;
    position: absolute;
    width: 95%;
    top: 5px;
    left: 2.5%;
    border-radius: 10px;
    z-index: 100;
  }

  @keyframes slideleft {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0%);
    }
  }

}

/* 選單項目樣式 */
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 0.5rem;

    a:active,
    a:hover,
    a.router-link-active {
      font-weight: 700;
      border-color: transparent;
      transition: 0.3s;
    }
  }
}

h1 {
  margin: 0;

  a {
    color: white;
    margin: 0;

    &:hover,
    &:active,
    &.router-link-active {
      border-color: transparent;
    }
  }
}

.register-button {
  background-color: #635bff;
  color: white;
  border-radius: 20px;
  padding: 7px 10px;

  a {
    color: white;
    padding: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

@media (max-width: 768px) {
  .navbar-collapse.show {
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  header .navbar {
    margin-top: 25px;
  }

  .register-button {
    background-color: transparent;
    border: none;

    a {
      color: var(--bs-nav-link-color);
    }
  }

  header {
    div ul {
      li {
        width: 100%;

        a {
          display: block;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>
