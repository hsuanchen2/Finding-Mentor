<template>
  <header>
    <nav>
      <h1>
        <router-link to="/"> Finding Mentor </router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/coaches">查看業界前輩</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/requests"> 收信夾 </router-link>
        </li>
        <li v-else>
          <router-link to="/auth"> 登入 </router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logOut">登出</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const isLoggedIn = computed(() => {
  return store.getters.isAuthenticated;
});

function logOut() {
  store.dispatch("logout");
  router.replace("/coaches");
}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 5rem;
  background: linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(99,91,255,1) 0%, rgba(99,91,255,1) 10%, rgba(0,108,255,1) 39%, rgba(4,206,255,1) 65%, rgba(4,178,255,1) 84%);
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid white;
  font-weight: 700;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
