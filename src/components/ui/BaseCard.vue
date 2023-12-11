<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.base-card {
  border-radius: 10px;
  box-shadow: $light-card-shadow;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 800px;
  background-color: white;
}
</style>
