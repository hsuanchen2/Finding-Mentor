<template>
  <span class="badge" :class="type">#{{ text }}</span>
</template>
<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: null,
  },
  title: {
    type: String,
    required: false,
    default: null,
  },
});
const text = computed(() => {
  // return props.title.toUpperCase();
  if (props.title.toUpperCase() == "FRONTEND") {
    return "前端工程";
  } else if (props.title.toUpperCase() == "BACKEND") {
    return "後端工程";
  } else {
    return "職涯諮詢";
  }
});
</script>
<style scoped lang="scss">
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #04B2FF;
  color: white;
}

.backend {
  background-color: #0072FF;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>
