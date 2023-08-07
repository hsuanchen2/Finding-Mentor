<template>
  <div>
    <section>
      <base-card>
        <header>
          <h2>&#11088 {{ fullName }}</h2>
          <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
          <h2>&#128231 留下訊息，我會盡快回覆!</h2>
          <base-button link :to="contactLink">聯絡我</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
  </div>
</template>
<script setup>
import { ref, defineProps, computed, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();
const props = defineProps(["id"]);
const selectedCoach = ref(null);
function setCoach() {
  // console.log(store.getters["coaches/coaches"]);
  selectedCoach.value = store.getters["coaches/coaches"].find((coach) => {
    return coach.id === props.id;
  });
}
setCoach();

const fullName = computed(() => {
  return selectedCoach.value.firstName + " " + selectedCoach.value.lastName;
});
const rate = computed(() => {
  return selectedCoach.value.hourlyRate;
});

const description = computed(() => {
  return selectedCoach.value.description;
});
const areas = computed(() => {
  return selectedCoach.value.areas;
});

const contactLink = computed(() => {
  // return route.path + "/contact";
  if (!route.path.endsWith("/contact")) {
    return route.path + "/contact";
  } else {
    return route.path
  }
});
console.log(route.path);

</script>
<style lang="scss" scoped>
header p {
  letter-spacing: 0.03em;
  line-height: 1.6;
  color: #425466;
}
</style>
