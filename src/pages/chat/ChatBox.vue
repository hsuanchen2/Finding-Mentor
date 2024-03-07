<template>
  <section class="wrapper row">
    <Chat-List :show="showMobileChatList" />
    <Chat-Area @toggle-chat-list="toggleChatList" />
    <Contact-Info class="contact-info none" />
  </section>
</template>
<script lang="ts" setup>
import { ref, Ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

import ChatList from "./ChatList.vue";
import ChatArea from "./ChatArea.vue";
import ContactInfo from "./ContactInfo.vue"
const store = useStore();
const router = useRouter();
const route = useRoute();
const showMobileChatList = ref(false);
const toggleChatList = (): void => {
  showMobileChatList.value = !showMobileChatList.value;
}
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

// .chat-list,
// .contact-info {
//   transform: translateX(0);
//   transition: transform 0.3s ease-in-out;
// }


@media screen and (max-width: 768px) {
  .contact-info.none {
    display: none;
  }
}
</style>
