<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">你的電子信箱</label>
      <input type="email" id="email" v-model.trim="formData.email" />
    </div>

    <div class="form-control">
      <label for="message">留下訊息</label>
      <textarea
        rows="5"
        type="text"
        id="message"
        v-model.trim="formData.message"
      ></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">請輸入正確的 Email 格式</p>
    <div class="actions">
      <base-button>寄出訊息</base-button>
    </div>
  </form>
</template>
<script setup>
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ref, reactive } from "vue";
const store = useStore();
const router = useRouter();
const route = useRoute();
const formData = reactive({
  email: "",
  message: "",
  coachId: route.params.id, 
});
const formIsValid = ref(true);
function validateForm() {
  formIsValid.value = true;
  if (formData.email === "" || !formData.email.includes("@")) {
    formIsValid.value = false;
    return;
  }
  if (formData.message === "") {
    formIsValid.value = false;
    return;
  }
}

function submitForm() {
  validateForm();
  if (!formIsValid.value) {
    return;
  }
  const newRequestForm = {
    email: formData.email,
    message: formData.message,
    coachId: formData.coachId,
  };
  console.log(newRequestForm);
  store.dispatch("requests/contactCoach", newRequestForm);
  router.replace("/coaches");
}
</script>
<style scoped lang="scss">
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
