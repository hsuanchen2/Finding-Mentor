<template>
  <the-header></the-header>
  <router-view #default="slotProps" :key="$route.fullPath">
    <component :is="slotProps.Component"></component>
  </router-view>
  <the-footer></the-footer>
</template>
<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

import { useStore } from "vuex";
import { watch, computed } from "vue";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const tryLogin = () => {
  store.dispatch("tryLogin");
};
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
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Noto+Sans+TC:wght@100;200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");


* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #f6f9fc;
  font-family: "Roboto", sans-serif !important;
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

p {
  // padding-left: 8px;
  // margin-bottom: 5px;
}

div[role="option"] {
  cursor: pointer;
  border-radius: 5px;
  padding-left: 8px;
  transition: .3s ease;

  &:hover {
    background-color: lightgray;
  }
}

.result_item {
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 8%;
  }
}

#autoComplete_list {
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 5px;
  box-shadow: $light-card-shadow;
  margin-top: 5px;
  padding: 5px 5px;
}

#register_autoComplete_list {
  position: absolute;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 5px;
  box-shadow: $light-card-shadow;
  margin-top: 5px;
  padding: 5px 5px;
  width: 94%; 
  box-sizing: border-box;
  z-index: 200;
}
</style>