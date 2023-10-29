<template>
  <div class="wrapper">
    <section class="container">
      <div class="row">
        <div class="col col-lg-5 col-12">
          <service-copy
            v-for="(copy, index) in copies"
            :index="index"
            :textStart="copy.textStart"
            :h2="copy.h2"
            :copy="copy.copy"
            :list="copy.lis"
            :show="show"
          ></service-copy>
          <!-- <p class="text-start">Thinking about getting into software?</p>
          <h2>That's exactly what we're here for!</h2>
          <p class="copy">
            We have successfully matched over a thousand career consultations,
            guiding individuals on their transformative journey to discover and
            secure their dream jobs.
          </p>
          <ul>
            <li>
              <img src="@/../public/svg-icons/arrow.svg" alt="" />
              Experienced career experts for guidance
            </li>
            <li>
              <img src="@/../public/svg-icons/arrow.svg" alt="" />
              1000+ successful career transitions
            </li>
            <li>
              <img src="@/../public/svg-icons/arrow.svg" alt="" />
              Personalized support for dream jobs
            </li>
            <li>
              <img src="@/../public/svg-icons/arrow.svg" alt="" />
              Tailored consultations to meet your needs
            </li>
            <li>
              <img src="@/../public/svg-icons/arrow.svg" alt="" />
              End-to-end personalized assistance
            </li>
            <li>
              <img src="@/../public/svg-icons/arrow.svg" alt="" />
              Proven methods for software roles
            </li>
            <li>
              <img src="@/../public/svg-icons/arrow.svg" alt="" />
              Practical insights for entering software
            </li>
          </ul>
          <base-button class="cta-button">Start now</base-button> -->
        </div>
        <div class="col col-lg-7 col-12 cards-container">
          <div class="row">
            <genre-card class="col col-12" :imageData="imageData"></genre-card>
            <!-- toggle buttons -->
            <div class="container toggle-buttons">
              <div class="row">
                <img
                  class="col col-3"
                  v-for="(button, index) in buttons"
                  :src="button.buttonUrl"
                  :alt="button.alt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import GenreCard from "@/components/ui/main-page/GenreCard.vue";
import ServiceCopy from "./ServiceCopy.vue";
const copies = ref([
  {
    textStart: "Thinking about getting into software?",
    h2: "That's exactly what we're here for !",
    copy: "We have successfully matched over a thousand career consultations, guiding individuals on their transformative journey to discover and secure their dream jobs.",
    lis: [
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Experienced career experts for guidance",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "1000+ successful career transitions",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Personalized support for dream jobs",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Tailored consultations to meet your needs",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "End-to-end personalized assistance",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Proven methods for software roles",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Practical insights for entering software",
      },
    ],
  },
  {
    textStart: "Not sure if your resume is ready ?",
    h2: "Let our experienced engineers review it for you",
    copy: "We offer resume review services conducted by experienced engineers from diverse fields. Whether you're a front-end, back-end or any other software-related domains",
    lis: [
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Resume reviews by experienced engineers from diverse fields",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Customized resume advice for software domains",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Gain industry-specific insights and recommendations from professionals",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Tailored support to create a resume matching dream job requirements ",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Access effective methods to highlight skills and achievements in software roles",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Learn from experts who facilitated 1000+ successful software engineering career transitions",
      },
      {
        iconUrl: "@/../public/svg-icons/arrow.svg",
        text: "Find motivation in success stories showcasing career transformations in software engineering",
      },
    ],
  },
]);

const imageData = ref([
  {
    alt: "first-img",
    imgUrl: "@/../public/index/code.png",
    show: true,
  },
  {
    alt: "first-img",
    imgUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    show: false,
  },
  {
    alt: "first-img",
    imgUrl:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    show: false,
  },
  {
    alt: "first-img",
    imgUrl:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    show: false,
  },
]);

const buttons = ref([
  { buttonUrl: "@/../public/company-logo/facebook.png", alt: "button" },
  { buttonUrl: "@/../public/company-logo/facebook.png", alt: "button" },
  { buttonUrl: "@/../public/company-logo/facebook.png", alt: "button" },
  { buttonUrl: "@/../public/company-logo/facebook.png", alt: "button" },
]);

const show = ref(1);
</script>
<style scoped lang="scss">
.wrapper {
  background-color: white;
  padding-top: 20px;
  // padding-bottom: 50px;
}
.container {
  max-width: 1200px;
  margin: 50px auto;
  h2 {
    font-weight: 700;
    color: $main-text-color;
  }
  .text-start {
    color: $main-purple;
    font-weight: 700;
  }
  .copy {
    font-size: 1.2rem;
    color: $miner-text-color;
  }
  ul {
    padding-left: 0;
    li {
      list-style: none;
      color: $miner-text-color;
      line-height: 1.6;
      img {
        margin-right: 5px;
      }
    }
  }
  .cta-button {
    margin-top: 15px;
  }
}

.cards-container {
  justify-content: space-around;
  align-items: center;
  .row {
    // flex-direction: column;
    justify-content: space-between;
  }
}

.toggle-buttons {
  .row {
    justify-content: space-around;
    flex-direction: row;
    img {
      width: 20%;
      cursor: pointer;
    }
  }
}
</style>
