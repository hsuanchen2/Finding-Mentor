<template>
  <section>
      <coach-form @save-data="saveData"></coach-form>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import CoachForm from "@/components/coaches/CoachForm.vue";
const store = useStore();
const router = useRouter();
function saveData(submittedForm) {
  // 呼叫coaches模組中名叫registerCoach的actions
  store.dispatch("coaches/registerCoach", submittedForm);
  // push也可以改成replace,replace可以讓頁面無法回到上一頁
  router.push("/coaches");
}
</script>
