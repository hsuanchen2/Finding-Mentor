<template>
  <div class="genre-card">
    <img
      v-for="image in imageData"
      :src="image.imgUrl"
      :alt="image.alt"
      v-show="image.show"
    />
    <h3>Thinking about getting into software engineering?</h3>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps, computed } from "vue";
const props = defineProps(["imageData"]);
</script>
<style scoped lang="scss">
.genre-card {
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s ease;
  padding: 0;
  position: relative;
  img {
    width: 90%;
    box-shadow: $light-card-shadow;
    border-radius: 10px;
  }
  h3 {
    position: absolute;
    color: white;
    bottom: 5%;
    left: 10%;
    width: 70%;
  }
}

.genre-card:hover {
  //   transform: scale(1.05);
}
</style>
