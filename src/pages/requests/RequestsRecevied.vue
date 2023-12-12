<template>
  <div class="wrapper">
    <!-- 雙驚嘆號會把string改成boolean -->
    <base-dialog :show="!!error" title="Something went wrong" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <header>
        <h2>Message Recevied</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-if="hasRequests">
        <request-item v-for="request in receivedRequests" :key="request.id" :email="request.userEmail"
          :message="request.message"></request-item>
      </ul>
      <section v-else class="no-request row">
        <div class="img-wrapper col col-12 col-md-3">
          <img src="@/../public/request/no_message_yet.png" alt="no request yet">
        </div>
        <div class="text-wrapper col col-12 col-md-9">
          <h4>No message yet</h4>
          <p>No messages received yet. Feel free to explore our mentor page for more information.</p>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import RequestItem from "../../components/requests/RequestsItem.vue";
import RequestItem2 from "../../components/requests/RequestItem2.vue";
import { Ref, computed, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
const store = useStore();
const isLoading: Ref<boolean> = ref(false);
const error: Ref<any> = ref(null);
const receivedRequests = computed((): any => {
  return store.getters["requests/receivedRequest"];
});

const hasRequests = computed((): any => {
  return store.getters["requests/hasRequests"];
});

const loadRequests = async () => {
  isLoading.value = true;
  try {
    await store.dispatch("requests/fetchRequests");
  } catch (err: any) {
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
.wrapper {
  max-width: 1200px;
  margin: 100px auto;
}

header {
  h2 {
    text-align: start;
    font-size: 2rem;
    color: $main-text-color;
  }
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

.no-request {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 50px;
  img {
    border-radius: 50%;
    width: 100%;
    max-width: 300px;
    box-shadow: $light-card-shadow;
  }

  h4 {
    color: $miner-text-color;
  }
}

@media (max-width:768px) {
  .no-request {
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    .img-wrapper {
      text-align: center;
    }
    .text-wrapper {
      text-align: center;
    }
  }
}
</style>
