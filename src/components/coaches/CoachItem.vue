<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>&#128178 每小時 ${{ rate }}元</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="coachContactLink" mode="outline"
        >聯絡我</base-button
      >
      <base-button link :to="coachDetailsLink">詳細資訊</base-button>
    </div>
  </li>
</template>
<script setup lang="ts">
import { ref, computed, defineProps, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["id", "firstName", "lastName", "rate", "areas"]);

const fullName = computed(() => {
  return props.firstName + " " + props.lastName;
});
const coachContactLink = computed(() => {
  return `${router.currentRoute.value.path}/${props.id}/contact`;
});

const coachDetailsLink = computed(() => {
  return `${router.currentRoute.value.path}/${props.id}`;
});

onMounted(() => {
  // console.log(router.currentRoute.value.path);
});
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 2px solid #d2d2d2;
  border-radius: 10px;
  padding: 1rem;
  border-radius: 10px;
}

h3 {
  font-size: 1.5rem;
  color: #0a2540;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
