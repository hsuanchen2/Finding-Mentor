<template>
  <div>
    <base-dialog
      :show="!!error"
      title="Something went wrong"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>

    <base-dialog :show="isLoading" fixed title="Authenticating">
      <base-spinner></base-spinner>
    </base-dialog>

    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="formData.email.val" />

        <p v-if="!formData.email.isValid">Please enter a valid email</p>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model.trim="formData.password.val"
        />
        <p v-if="!formData.password.isValid">
          The password must be at least 6 characters long
        </p>
      </div>
      <base-button>{{ submittedButtonCaption }}</base-button>
      <base-button mode="flat" type="button" @click="switchAuthMode">{{
        switchModeCaption
      }}</base-button>
    </form>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const store = useStore();
const router = useRouter();
const route = useRoute();
const formData = reactive({
  email: {
    val: "",
    isValid: true,
  },
  password: {
    val: "",
    isValid: true,
  },
});
// 判斷目前是登入還是註冊模式
const mode = ref("login");
const isLoading = ref(false);
const error = ref(null);
const formIsValid = ref(true);
function validateForm() {
  formIsValid.value = true;
  if (formData.email.val === "" || !formData.email.val.includes("@")) {
    formData.email.isValid = false;
    formIsValid.value = false;
  }
  if (formData.password.val === "" || formData.password.val.length < 6) {
    formData.password.isValid = false;
    formIsValid.value = false;
  }
}

async function submitForm() {
  validateForm();
  if (!formIsValid.value) {
    return;
  }
  isLoading.value = true;

  try {
    // send http request
    if (mode.value === "login") {
      await store.dispatch("login", {
        email: formData.email.val,
        password: formData.password.val,
      });
    } else {
      await store.dispatch("signup", {
        email: formData.email.val,
        password: formData.password.val,
      });
    }

    const redirectUrl = "/" + (route.query.redirect || "coaches");
    router.replace(redirectUrl);
  } catch (err) {
    console.log(err);
    error.value = err.message || "Something went wrong";
  }
  isLoading.value = false;
}

function switchAuthMode() {
  if (mode.value === "login") {
    mode.value = "signup";
  } else {
    mode.value = "login";
  }
}

function handleError() {
  error.value = null;
}

const submittedButtonCaption = computed(() => {
  if (mode.value === "login") {
    return "Login";
  } else {
    return "Register";
  }
});
const switchModeCaption = computed(() => {
  if (mode.value === "login") {
    return "Register";
  } else {
    return "Login";
  }
});
</script>
<style scoped lang="scss">
</style>
