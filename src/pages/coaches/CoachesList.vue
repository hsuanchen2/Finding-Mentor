<template>
  <hero-section></hero-section>
  <the-result></the-result>
  <!-- <div>
    <base-dialog :show="!!error" title="Something went wrong" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)">
            重新整理
          </base-button>
          <base-button v-if="!isLoggedIn" link to="/auth?redirect=register">
            創建帳號成為職涯導師
          </base-button>
          <base-button v-if="isLoggedIn && !isCoach && !isLoading" link to="/register">註冊成為職涯前輩</base-button>
        </div>

        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName"
            :lastName="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
        </ul>
        <h3 v-else>目前沒有職涯前輩</h3>
      </base-card>
    </section>
  </div> -->
</template>
<script setup>
import { ref, computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
//test
import HeroSection from "../../components/hero/HeroSection.vue";
import TheResult from "../../components/companies/TheResult.vue";
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";
const store = useStore();

const frontend = ref(true);
const backend = ref(true);
const career = ref(true);
const isLoading = ref(false);
const error = ref(null);

const isLoggedIn = computed(() => {
  return store.getters.isAuthenticated;
});
const filteredCoaches = computed(() => {
  const coaches = store.getters["coaches/coaches"];
  return coaches.filter((coach) => {
    if (frontend.value && coach.areas.includes("frontend")) {
      return true;
    } else if (backend.value && coach.areas.includes("backend")) {
      return true;
    } else if (career.value && coach.areas.includes("career")) {
      return true;
    } else {
      return false;
    }
  });
});

const hasCoaches = computed(() => {
  return !isLoading.value && store.getters["coaches/hasCoaches"];
});

function setFilters(updatedFilters) {
  for (const key in updatedFilters) {
    if (key === "frontend") {
      frontend.value = updatedFilters.frontend;
    }
    if (key === "backend") {
      backend.value = updatedFilters.backend;
    }
    if (key === "career") {
      career.value = updatedFilters.career;
    }
  }
}

const isCoach = computed(() => {
  return store.getters["coaches/isCoach"];
});

async function loadCoaches(refresh = false) {
  isLoading.value = true;
  try {
    await store.dispatch("coaches/loadCoaches", {
      forceRefresh: refresh,
    });
  } catch (err) {
    error.value = err.message || "Something went wrong";
  }
  isLoading.value = false;
}

function handleError() {
  error.value = null;
}

onBeforeMount(() => {
  loadCoaches();
});
</script>
<style scoped lang="scss">
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
