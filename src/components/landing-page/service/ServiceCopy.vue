<template>
  <div v-if="props.index === props.show">
    <p class="text-start">{{ props.textStart }}</p>
    <h2>{{ props.h2 }}</h2>
    <p class="copy">{{ props.copy }}</p>
    <ul>
      <li v-for="text in props.list" :text="text.text">
        <img src="@/../public/svg-icons/arrow.svg" alt="" />
        {{ text.text }}
      </li>
    </ul>
    <base-button class="cta-button">Start now</base-button>
  </div>
</template>
<script setup>
import { ref, reactive, defineProps } from "vue";
const props = defineProps(["textStart", "h2", "copy", "list", "index", "show"]);
console.log(props.index);
const test = ref(props);
console.log(test.value);
</script>
<style scoped lang="scss">
h2 {
  font-weight: 700;
  color: $main-text-color;
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
</style>
