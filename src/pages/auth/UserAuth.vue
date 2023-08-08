<template>
  <div>
    <base-dialog :show="!!error" title="不知名的錯誤" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>

    <base-dialog :show="isLoading" fixed title="Authenticating">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">電子信箱</label>
          <input type="email" id="email" v-model.trim="formData.email.val" />

          <p v-if="!formData.email.isValid">
            請輸入有效的電子信箱
          </p>
        </div>
        <div class="form-control">
          <label for="password">密碼</label>
          <input
            type="password"
            id="password"
            v-model.trim="formData.password.val"
          />
          <p v-if="!formData.password.isValid">
            密碼長度至少為6個字
          </p>
        </div>
        <base-button>{{ submittedButtonCaption }}</base-button>
        <base-button mode="flat" type="button" @click="switchAuthMode">{{
          switchModeCaption
        }}</base-button>
      </form>
    </base-card>
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
    // console.log(route);
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
    return "登入";
  } else {
    return "註冊";
  }
});
const switchModeCaption = computed(() => {
  if (mode.value === "login") {
    return "註冊";
  } else {
    return "登入";
  }
});
</script>
<style scoped lang="scss">
form {
  margin: 1rem;
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

p {
  color: red;
}
</style>
