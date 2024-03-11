<template>
  <section class="wrapper row">
    <!-- backdrop for mobile -->
    <div v-show="showChatList && lessThan1200" class="chat-list backdrop" @click="toggleChatList"></div>
    <div v-show="showContactInfo && lessThan768" class="contact-info backdrop" @click="toggleContactInfo">
    </div>
    <Chat-List :show="showChatList" @toggle-chat-list="toggleChatList" />
    <Chat-Area @toggle-chat-list="toggleChatList" @toggle-contact-info="toggleContactInfo"
      :receiverId="receiverInfo.receiverId" />
    <Contact-Info @toggle-contact-info="toggleContactInfo" :show="showContactInfo" class="contact-info" />
  </section>
</template>
<script lang="ts" setup>
import { ref, Ref, computed, onMounted, onUnmounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

import ChatList from "./ChatList.vue";
import ChatArea from "./ChatArea.vue";
import ContactInfo from "./ContactInfo.vue"
const store = useStore();
const router = useRouter();
const route = useRoute();
const showChatList: Ref<boolean> = ref(true);
const showContactInfo: Ref<boolean> = ref(true);
const lessThan1200: Ref<boolean> = ref(false);
const lessThan768: Ref<boolean> = ref(false);
const chatList = ref([]);
const receiverInfo = reactive({
  userId: "",
  firstName: "",
  lastName: "",
  email: "",
  location: "",
  title: "",
  jobRating: 0,
  jobsDone: 0,
  charge: 0,
  skills: [],
  expertise: "",
  receiverId: "",
});



// listen to emits events
const toggleChatList = (): void => {
  showChatList.value = !showChatList.value;
  console.log(showChatList.value);
}

const toggleContactInfo = (): void => {
  showContactInfo.value = !showContactInfo.value;
}


const handleResize = (): void => {
  showChatList.value = window.innerWidth >= 1200;
  lessThan1200.value = window.innerWidth < 1200;
  lessThan768.value = window.innerWidth < 768;
  showContactInfo.value = window.innerWidth >= 768;
}


onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
handleResize();
receiverInfo.receiverId = localStorage.getItem("userId"); 

</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  max-width: 1200px;
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: $light-card-shadow;
  box-sizing: content-box;
}


.chat-list.backdrop,
.contact-info.backdrop {
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow: auto;
}
</style>
