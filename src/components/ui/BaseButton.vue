<template>
  <!-- 給class -->
  <button v-if="!link" :class="mode">
    <!-- <slot></slot> -->
    <slot></slot> <span><i class="fas fa-arrow-right"></i></span>
  </button>
  <router-link v-else :class="mode" :to="to">
    <!-- <slot></slot> -->
    <slot></slot> <span><i class="fas fa-arrow-right"></i></span>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  link: {
    type: Boolean,
    required: false,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: "/",
  },
  mode: {
    type: String,
    required: false,
    default: null,
  },
});
</script>
<style scoped lang="scss">
button,
a {
  text-decoration: none;
  // padding: 0.4rem 1.5rem;
  font: inherit;
  background-color: $main-button-color;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  // margin-right: 0.5rem;
  display: inline-block;
  transition: 0.3s;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #8b00e8;
  border-color: #8600e0;
}

// arrow hover

span {
  display: inline-block;
  transition: 0.3s ease;
  position: relative;
  font-family: "Roboto", sans-serif;
  // width: 70px;
  text-align: center;
  font-size: 16px;

  a {
    text-decoration: none;
    position: relative;
  }

  i {
    position: absolute;
    opacity: 0;
    top: 29%;
    right: -12px;
    transition: 0.3s;
    font-size: 12px;
  }

  &:hover span {
    transform: translate3d(-0.2rem, 0, 0);
  }

  &:hover span i {
    opacity: 1;
  }
}
</style>
