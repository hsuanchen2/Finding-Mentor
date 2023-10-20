<template>
  <header>
    <nav class="navbar navbar-expand-md">
      <router-link to="/" class="navbar-brand">Finding Mentor</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ 'show': showNav }" id="navbarNav" ref="mobileDropdown">
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
            <router-link to="/request" class="nav-link" @click="closeMenu">Your Requests</router-link>
          </li>
          <li class="nav-item" v-else>
            <router-link to="/auth" class="nav-link" @click="closeMenu">Login</router-link>
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
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const isLoggedIn = computed(() => {
  return store.getters.isAuthenticated;
});

const showNav = ref(false);
const mobileDropdown = ref(null);

const logOut = () => {
  store.dispatch("logout");
  router.replace("/coaches");
}

const toggleNav = () => {
  showNav.value = !showNav.value;
}

const closeMenu = () => {
  showNav.value = false;
}

// const viewWidth = ref(document.documentElement.clientWidth);


</script>

<style scoped lang="scss">
header {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    display: inline-block;
    padding: 0.75rem 1.5rem;
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
  // border: 1px solid red;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar-brand {
    font-weight: 700;
  }

  .navbar-collapse {
    justify-content: space-between;
  }

  .navbar-collapse.show {
    background-color: white;

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
    }
  }

}

/* 標題樣式 */
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

@media (min-width :768px) {
  .navbar-collapse.show {
    background-color: transparent !important;
  }
}
</style>
