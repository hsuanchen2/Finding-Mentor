<template>
  <section class="wrapper">
    <div class="text">
      <h2>Contact Us</h2>
      <p>Got questions? Reach out!</p>
    </div>
    <form @submit.prevent="sendMessage">
      <div class="form-row">
        <div class="form-group col-6">
          <div class="col-sm-12">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" placeholder="First Name" />
          </div>
        </div>
        <div class="form-group col-6">
          <div class="col-sm-12">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" placeholder="Last Name" />
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-6">
          <div class="col-sm-12">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Your Email" />
          </div>
        </div>
        <div class="form-group col-6">
          <label for="inputState">Choose question type</label>
          <select id="inputState" class="form-control">
            <option disabled selected>Choose a question</option>
            <option>Pricing</option>
            <option>Account</option>
            <option>Refund</option>
            <option>Affiliate</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-12">
          <label for="message">Message</label>
          <textarea id="message" placeholder="Your Message" class="form-control" rows="6"></textarea>
        </div>
      </div>
      <div class="submit-button">
        <base-button type="submit">Send Message</base-button>
      </div>
    </form>
  </section>
</template>
<script setup>
  import { ref, reactive } from "vue";
  const sendMessage = () => {
    console.log("message sent");
  }

</script>
<style scoped lang="scss">
  .wrapper {
    max-width: 800px;
    margin: 100px auto;

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

    .form-row {
      display: flex;
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
</style>