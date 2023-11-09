<template>
  <base-toast :show="emailSent" :copy="toastCopy.copy" :header="toastCopy.header" :imgUrl="toastCopy.imgUrl"
    class="toast"></base-toast>
  <div class="wrapper">
    <section class="container">
      <div class="text">
        <h2>Contact Us</h2>
        <p>Got questions? Reach out!</p>
      </div>
      <form @submit.prevent="sendMessage">
        <div class="row">
          <div class="form-group col-sm-6">
            <div class="col-sm-12">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="First Name" name="from_firstName"
                v-model="formData.firstName" required />
            </div>
          </div>
          <div class="form-group col-sm-6">
            <div class="col-sm-12">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" placeholder="Last Name" name="from_lastName"
                v-model="formData.lastName" required />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="form-group col-sm-6">
            <div class="col-sm-12">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Your Email" name="from_email"
                v-model="formData.email" required />
            </div>
          </div>
          <div class="form-group col-sm-6">
            <label for="inputState">Choose question type</label>
            <select id="inputState" class="form-select" name="from_question_type" v-model="formData.question_type"
              required>
              <option value="default" disabled selected>Choose a question</option>
              <option value="pricing">Pricing</option>
              <option value="account">Account</option>
              <option value="refund">Refund</option>
              <option value="affiliate">Affiliate</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-12">
            <label for="message">Message</label>
            <textarea id="message" placeholder="Your Message" class="form-control" rows="6" name="message"
              v-model="formData.message"></textarea>
          </div>
        </div>
        <div class="submit-button">
          <base-button type="submit">Send Message</base-button>
        </div>
      </form>
    </section>
    <!-- <button @click="toggle"> toggle</button> -->
  </div>
</template>
<script setup>
  import { ref, onMounted, reactive, computed } from "vue";
  import emailjs from '@emailjs/browser';
  import BaseToast from "@/components/ui/BaseToast.vue";
  const formData = reactive({
    firstName: "",
    lastName: "",
    email: "",
    question_type: "default",
    message: "",
  });

  const toastCopy = computed(() => {
    return {
      header: "We've got your message",
      imgUrl: "@/../public/svgs/email.svg",
      copy: `Hi ${formData.firstName}! Email sent successfully!`,
    }
  })

  const form = ref(null);
  const emailSent = ref(false);
  onMounted(() => {
    form.value = document.querySelector("form");
  });
  const sendMessage = async () => {
    try {
      await emailjs.sendForm('service_w4z3oxy', 'template_h1gup0h', form.value, 'VJLl9wAnKWUY9SO6G');
      emailSent.value = true;
      await new Promise(resolve => setTimeout(resolve, 2000));
      emailSent.value = false;

      // reset form input fields
      formData.firstName = "";
      formData.lastName = "";
      formData.email = "";
      formData.question_type = "default";
      formData.message = "";

      emailSent.value = false;
    } catch (error) {
      console.log(error);
      emailSent.value = false;
    }
  }
</script>
<style scoped lang="scss">
  .wrapper {
    background-color: #fff;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 70px;

    .text {
      text-align: center;
      margin-bottom: 40px;

      h2 {
        color: $main-purple;
        font-weight: 700;
      }

      p {
        color: $main-text-color;
        font-size: 1.1rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 10px;

      .form-group {
        padding-right: 5px;
        padding-left: 5px;
        box-sizing: border-box;
      }

      label {
        margin-bottom: 3px;
      }
    }

    textarea {
      resize: none;
    }

    .submit-button {
      display: flex;
      justify-content: center;
      margin-top: 25px;
    }
  }

  @media (max-width: 768px) {
    form {
      width: 95%;
      margin: 0 auto;

      label,
      input {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 576px) {
    .wrapper {
      .row {
        margin-bottom: 0;
      }
    }
  }
</style>