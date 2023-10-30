<template>
  <transition name="fade" mode="out-in">
    <div v-if="props.index === props.show" :key="props.copy">
      <p class="text-start">{{ props.textStart }}</p>
      <h2>{{ props.h2 }}</h2>
      <p class="copy">{{ props.copy }}</p>
      <ul>
        <li v-for="text in props.list" :text="text.text" :key="text.text">
          <img src="@/../public/svg-icons/arrow.svg" alt="" />
          {{ text.text }}
        </li>
      </ul>
      <base-button class="cta-button">Start now</base-button>
    </div>
  </transition>
</template>
<script setup>
import { ref, reactive, defineProps, watch } from "vue";
const props = defineProps(["textStart", "h2", "copy", "list", "index", "show"]);
const test = ref(props);

</script>
<style scoped lang="scss">
h2 {
  font-weight: 700;
  color: $main-text-color;
  margin-bottom: 20px;
}

.text-start {
  color: $main-purple;
  font-weight: 700;
}

.copy {
  font-size: 1.2rem;
  color: $miner-text-color;
}

ul {
  padding-left: 0;

  li {
    list-style: none;
    color: $miner-text-color;
    line-height: 1.6;

    img {
      margin-right: 5px;
    }
  }
}

.cta-button {
  margin-top: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
