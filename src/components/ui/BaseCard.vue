<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>
<script setup></script>
<style scoped>
.base-card {
  border-radius: 10px;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 800px;
  background-color: white;
}
</style>
