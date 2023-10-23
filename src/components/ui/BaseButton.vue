<template>
  <!-- 給class -->
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :class="mode" :to="to">
    <slot></slot>
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
  padding: 0.4rem 1.5rem;
  font: inherit;
  background-color: #7A73FF;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
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

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #635BFF;
  color: #635BFF;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
