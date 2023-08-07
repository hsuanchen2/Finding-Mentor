<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !formData.firstName.isValid }">
      <label for="firstname">姓氏</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="formData.firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!formData.firstName.isValid">姓氏不能為空</p>
    </div>

    <div class="form-control" :class="{ invalid: !formData.lastName.isValid }">
      <label for="lastname">名稱</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="formData.lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!formData.lastName.isValid">名稱不能為空</p>
    </div>

    <div
      class="form-control"
      :class="{ invalid: !formData.description.isValid }"
    >
      <label for="description">自我介紹</label>
      <textarea
        type="textarea"
        id="description"
        rows="5"
        v-model.trim="formData.description.val"
        @blur="clearValidity('description')"
      >
      </textarea>
      <p v-if="!formData.description.isValid">自我介紹不能為空</p>
    </div>

    <div class="form-control" :class="{ invalid: !formData.rate.isValid }">
      <label for="rate">收費 (每小時)</label>
      <input
        type="number"
        id="rate"
        v-model.number="formData.rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!formData.rate.isValid">Rate cannot be empty</p>
    </div>

    <div class="form-control" :class="{ invalid: !formData.areas.isValid }">
      <h3>Expertises</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="formData.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">前端開發 </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="formData.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">後端開發 </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="formData.areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">職涯諮詢</label>
      </div>
    </div>
    <p v-if="!formIsValid">請確認資料是否有誤</p>
    <base-button>註冊成為前輩</base-button>
  </form>
</template>

<script setup>
import { ref, reactive, defineEmits } from "vue";

const emits = defineEmits(["save-data"]);
const formData = reactive({
  firstName: {
    val: "",
    isValid: true,
  },
  lastName: {
    val: "",
    isValid: true,
  },
  description: {
    val: "",
    isValid: true,
  },
  rate: {
    val: null,
    isValid: true,
  },
  areas: {
    val: [],
    isValid: true,
  },
});
const formIsValid = ref(true);

function validateForm() {
  // 先設定成true 用來移除所有錯誤訊息，再做判斷
  formIsValid.value = true;
  if (formData.firstName.val === "") {
    formData.firstName.isValid = false;
    formIsValid.value = false;
  }
  if (formData.lastName.val === "") {
    formData.lastName.isValid = false;
    formIsValid.value = false;
  }
  if (formData.description.val === "") {
    formData.description.isValid = false;
    formIsValid.value = false;
  }
  if (!formData.rate.val || formData.rate.val < 0) {
    formData.rate.isValid = false;
    formIsValid.value = false;
  }
  if (formData.areas.val.length === 0) {
    formData.areas.isValid = false;
    formIsValid.value = false;
  }
}

function clearValidity(input) {
  formData[input].isValid = true;
}

function submitForm() {
  // validate form before submit
  validateForm();
  if (!formIsValid.value) {
    return;
  }
  const submittedForm = {
    first: formData.firstName.val,
    last: formData.lastName.val,
    description: formData.description.val,
    rate: formData.rate.val,
    areas: formData.areas.val,
  };
  emits("save-data", submittedForm);
}
</script>
<style scoped lang="scss">
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
