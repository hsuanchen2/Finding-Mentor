<template>
  <div class="wrapper">
    <header class="container">
      <h2 class="col col-12">Message Recevied</h2>
    </header>
    <base-spinner v-if="isLoading"></base-spinner>

    <table v-if="hasRequests && !isLoading" class="table">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Sender's email</th>
          <th scope="col">Message</th>
          <th scope="col" @click="sortByTime">Recevied time <i class="fa-solid fa-sort"></i></th>
        </tr>
      </thead>
      <tbody>
        <request-item v-for="request in receivedRequests" :firstName="request.firstName" :lastName="request.lastName"
          :email="request.userEmail" :receviedTime="request.time" :message="request.message"></request-item>
      </tbody>
    </table>

    <div class="container" v-if="!hasRequests && !isLoading">
      <section class="no-request row">
        <div class="img-wrapper col col-12 col-md-3">
          <img src="@/../public/request/no_message_yet.png" alt="no request yet">
        </div>
        <div class="text-wrapper col col-12 col-md-9">
          <h4>No message yet</h4>
          <p>No messages received yet. Feel free to explore other pages for more information.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import RequestItem from "../../components/requests/RequestsItem.vue";
import { Ref, computed, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
const store = useStore();
const isLoading: Ref<boolean> = ref(false);
const error: Ref<any> = ref(null);
const sortDescending: Ref<boolean> = ref(true);
const receivedRequests = computed((): any => {
  const requests = store.getters["requests/receivedRequest"];
  if (sortDescending.value) {
    return requests.sort((a, b) => b.time - a.time);
  } else {
    return requests.sort((a, b) => a.time - b.time);
  }
})

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

onBeforeMount(() => {
  loadRequests();
  // console.log(store.getters["requests/receivedRequest"])
});

const sortByTime = () => {
  sortDescending.value = !sortDescending.value;
}

</script>

<style scoped lang="scss">
.table {
  margin: 0 auto 200px auto;  
  word-break: break-word;
}

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
  padding: 0;
  max-width: 30rem;
}

.no-request {
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  box-sizing: border-box;
  flex-wrap: wrap;

  img {
    border-radius: 50%;
    width: 100%;
    max-width: 300px;
    box-shadow: $light-card-shadow;
  }

  h4 {
    color: $minor-text-color;
  }
}

@media (max-width:768px) {
  header {
    h2 {
      text-align: center;
    }
  }

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

.fa-sort {
  margin-left: 5px;
  color: $main-button-color;
  cursor: pointer;
}

th {
  color: $main-text-color;
}
</style>
