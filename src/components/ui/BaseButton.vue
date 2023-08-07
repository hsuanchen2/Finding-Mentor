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
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #635BFF;
  border: 1px solid #635BFF;
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
  background-color: #270041;
  border-color: #270041;
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
