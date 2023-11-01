<template>
  <div v-if="props.index === props.show" :key="props.copy" class="copy-container">
    <p class="text-start">{{ props.textStart }}</p>
    <h2>{{ props.h2 }}</h2>
    <p class="copy">{{ props.copy }}</p>
    <ul>
      <li v-for="text in props.list" :text="text.text" :key="text.text">
        <img src="@/../public/svg-icons/arrow.svg" alt="" />
        {{ text.text }}
      </li>
    </ul>
    <base-button class="cta-button">Start now</base-button>
  </div>
</template>
<script setup>
  import { ref, reactive, defineProps, watch } from "vue";
  const props = defineProps(["textStart", "h2", "copy", "list", "index", "show"]);
  const copies = ref([
    {
      textStart: "Thinking about getting into software?",
      h2: "That's exactly what we're here for !",
      copy: "We have successfully matched over 1000+ career consultations, guiding individuals on their transformative journey to secure their dream jobs.",
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
      copy: "We offer resume review services conducted by experienced engineers from diverse fields. Whether front-end, full-stack.",
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
          text: "Gain industry-specific insights",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Tailored resume support for your dream job ",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Access effective methods to highlight skills",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "1000+ successful software engineering career transitions",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Find success stories showcasing career transformations",
        },
      ],
    },
    {
      textStart: "Looking for experienced pro to consult?",
      h2: "Expert Guidance for Your Career",
      copy: "Our team of experienced engineers is here to provide personalized guidance for your career journey. Whether you're in front-end, back-end, or any other software-related domains.",
      lis: [
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Behavioral question problem solving",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "In-Depth technical skill evaluation",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Personalized career roadmap",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Industry networking opportunities",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Portfolio and GitHub optimization",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Soft skills enhancement",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Customized optimized LinkedIn profile",
        },
      ],
    },
    {
      textStart: "Feeling stuck?",
      h2: "Don't worry, you're not alone. Talking to someone can be the key to your breakthrough.",
      copy: "Our team of experienced engineers is dedicated to providing personalized guidance for your career journey",
      lis: [
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Expert problem-solving for behavioral interview questions",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Comprehensive evaluation of your technical skills",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Tailored career roadmap designed just for you",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Exclusive networking opportunities within the industry",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Optimization of your portfolio and GitHub presence",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Enhancement of your soft skills, vital for success",
        },
        {
          iconUrl: "@/../public/svg-icons/arrow.svg",
          text: "Personalized optimization of your LinkedIn profile",
        },
      ],
    },
  ]);
</script>
<style scoped lang="scss">
  h2 {
    font-weight: 700;
    color: $main-text-color;
    margin-bottom: 20px;
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
</style>