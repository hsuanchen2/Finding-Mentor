<template>
  <!-- <form @submit.prevent="submitForm">
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
  </form> -->
  <form @submit.prevent="submitForm">
    <h4>Register as a mentor</h4>
    <div class="row">
      <div class="form-group col-md-6">
        <label for="first-name">First Name</label>
        <input type="text" class="form-control" id="first-name" placeholder="First Name" required>
      </div>
      <div class="form-group col-md-6">
        <label for="last-name">Last Name</label>
        <input type="text" class="form-control" id="last-name" placeholder="Last Name" required>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-md-6">
        <label for="hourly-rate">Hourly Rate</label>
        <input type="text" class="form-control" id="hourly-rate" placeholder="Hourly Rate" required>
      </div>
      <div class="form-group col-md-6" id="autoComplete_wrapper">
        <label for="location">Location</label>
        <input id="autoComplete" type="search" dir="ltr" spellcheck=false autocorrect="off" autocomplete="off"
          autocapitalize="off" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12">
        <label for="user-photo">Upload a Photo</label>
        <input id="user-photo" class="form-control" type="file" accept="image/png, image/jpeg" name="user-photo">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12">
        <label for="job-title">Job Title</label>
        <input class="form-control" type="text" placeholder="Your job title, ex: ex Google, ex Facebook Techlead"
          name="job-title">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12">
        <label class="typo__label">Field</label>
        <multiselect v-model="valuee" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name"
          track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag" class="form-control"></multiselect>
        <pre class="language-json"><code>{{ valuee.name }}</code></pre>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12">
        <label for="about-me">About Me</label>
        <textarea name="about-me" id="about-me" cols="30" rows="6" placeholder="Introduce yourself"
          class="about-me"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12">
        <label for="about-me">Experience</label>
        <textarea name="experience" id="about-me" cols="30" rows="6" placeholder="Your experience in related fields"
          class="experience"></textarea>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, defineEmits, onMounted } from "vue";
import countryData from "@/data/countries.json";
import autoComplete from '@tarekraafat/autoComplete.js';
import Multiselect from 'vue-multiselect';

const valuee = ref([]);
const options = ref([
  { name: 'Front-End', code: 'fe' },
  { name: 'Back-End', code: 'be' },
  { name: 'Full-Stack', code: 'fs' },
  { name: 'DevOps', code: 'do' },
  { name: 'Data-Scientist', code: 'ds' },
  { name: 'UI/UX Designer', code: 'uiux' },
  { name: 'Product Management', code: 'pm' },
])
const addTag = (newTag: any) => {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
  }
  options.value.push(tag)
  value.value.push(tag)
}

const autoCompleteJS = ref(null);
onMounted((): void => {
  //init autoCompleteJS
  const autoCompleteData = {
    placeHolder: "Search location",
    wrapper: false,
    data: {
      src: countryData.map(country => ({ name: country.name, flag: country.flag })),
      // use the key "name" as keyword for searching
      keys: ["name"],
      cache: true
    },

    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value.name;
          autoCompleteJS.value.input.value = selection;
        }
      }
    },
    threshold: 2,
    debounce: 300,
    resultsList: {
      tag: "div",
      id: "register_autoComplete_list",
      destination: "#autoComplete",
      position: "afterend",
      maxResults: 5,
      noResults: true,
      tabSelect: true,
      element: (list, data) => {
        const info = document.createElement("p");
        if (data.results.length > 0) {
          info.innerHTML = `Found ${data.results.length}</strong> out of <strong>${data.matches.length}</strong> results`;
        } else {
          info.innerHTML = `No result found`;
        }
        list.prepend(info);
      },
    },
    resultItem: {
      tag: "div",
      class: "result_item",
      element: (item, data) => {
        const flag = document.createElement("img");
        flag.src = data.value.flag;
        item.prepend(flag);
      }
    }
  }
  autoCompleteJS.value = new autoComplete(autoCompleteData);
})

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

const submitForm = () => {
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
form {
  max-width: 700px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: $light-card-shadow;
  padding: 30px 30px;

  .row {
    margin-bottom: 5px;
  }

  h4 {
    color: $main-text-color;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  label {
    color: $miner-text-color;
    font-weight: 700;
  }

  textarea {
    border-radius: 5px;
    resize: none;
    overflow: scroll;
    padding: 5px 10px;
    margin-top: 0.5rem;
  }
}

.form-control {
  margin: 0.5rem 0;
}


#autoComplete_wrapper {
  position: relative;
}


input[type="checkbox"]+label {
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
