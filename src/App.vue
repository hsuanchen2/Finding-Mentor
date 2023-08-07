<template>
  <the-header></the-header>
  <router-view #default="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>
<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import { useStore } from "vuex";
import { watch, computed } from "vue";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
function tryLogin() {
  store.dispatch("tryLogin");
}
tryLogin();

const didAutoLogout = computed(() => {
  return store.getters.didAutoLogout;
});

watch(didAutoLogout, (currentValue, oldValue) => {
  //didautologout有數據，而且與前一筆數據不同，代表自動登出過
  if (currentValue && currentValue !== oldValue) {
    router.replace("/coaches");
  }
});
</script>
<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Noto+Sans+TC:wght@300;400;500;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  background-color: #F6F9FC;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
