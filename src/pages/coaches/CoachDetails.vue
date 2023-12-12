<template>
  <div v-if="selectedCoach">
    <section>
      <base-card>
        <header>
          <h2>&#11088 {{ fullName }}</h2>
          <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
          <p>{{ description }}</p>
          <h2>&#128231 留下訊息，我會盡快回覆!</h2>
          <base-button link :to="contactLink">聯絡我</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, computed, onBeforeMount, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();
const props = defineProps({
  id: {
    type: String,
    default: "red",
  }
});
const selectedCoach = ref(null);
async function setCoach() {
  try {
    if (store.getters['coaches/coaches'].length === 0) {
      await store.dispatch('coaches/loadCoaches', { forceRefresh: true })
    }
    const coachId = route.params.id;
    const coach = store.getters['coaches/coaches'].find(
      (coach) => coach.id === coachId
    )
    if (coach != undefined) {
      selectedCoach.value = coach;
    }
  } catch (error) {
    console.log(error);
  }
}


onBeforeMount(async () => {
  await setCoach();
})

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
  if (!route.path.endsWith("/contact")) {
    return route.path + "/contact";
  } else {
    return route.path
  }
});


</script>
<style lang="scss" scoped>
header p {
  letter-spacing: 0.03em;
  line-height: 1.6;
  color: #425466;
}
</style>
