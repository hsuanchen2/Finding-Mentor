<template>
  <div>
    <!-- 雙驚嘆號會把string改成boolean -->
    <base-dialog :show="!!error" title="Something went wrong" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Message Recevied</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-if="hasRequests">
          <request-item v-for="request in receivedRequests" :key="request.id" :email="request.userEmail"
            :message="request.message"></request-item>
        </ul>
        <h3 v-else>No message yet</h3>
      </base-card>
    </section>
  </div>
</template>

<script setup lang="ts">
import RequestItem from "../../components/requests/RequestsItem.vue";
import { computed, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
const store = useStore();
const isLoading = ref(false);
const error = ref(null);
const receivedRequests = computed(() => {
  return store.getters["requests/receivedRequest"];
});

const hasRequests = computed(() => {
  return store.getters["requests/hasRequests"];
});

async function loadRequests() {
  isLoading.value = true;
  try {
    await store.dispatch("requests/fetchRequests");
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
  isLoading.value = false;
}

function handleError() {
  error.value = null;
}

onBeforeMount(() => {
  loadRequests();
});
</script>

<style scoped lang="scss">
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
