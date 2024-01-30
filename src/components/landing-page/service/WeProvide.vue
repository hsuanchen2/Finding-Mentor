<template>
  <div class="wrapper">
    <section class="container">
      <div class="row">
        <div class="col col-12 col-lg-5">
          <service-copy v-for="(copy, index) in whichCopy" :index="index" :textStart="copy.textStart" :h2="copy.h2"
            :copy="copy.copy" :list="copy.lis" :show="copy.show"></service-copy>
        </div>
        <div class="col col-12 col-lg-7 cards-container">
          <div class="row">
            <genre-card v-for="(image, index) in whichImage" class="col col-12" :src="image.imgUrl" :copy="image.copy"
              :show="image.show" :alt="image.alt" :index="index"></genre-card>
            <!-- toggle buttons -->
            <div class="container toggle-buttons">
              <div class="row">
                <img v-for="(button, index) in buttons" :class="{ col: true, 'col-3': true, active: button.active }"
                  :src="button.buttonUrl" :alt="button.alt" @click="toggle(index)" :key="index" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
  import { ref, reactive, onMounted, computed } from "vue";
  import GenreCard from "@/components/ui/main-page/GenreCard.vue";
  import ServiceCopy from "./ServiceCopy.vue";

  const copies = ref([
    {
      textStart: "Thinking about getting into software?",
      h2: "That's exactly what we're here for !",
      copy: "We have successfully matched over 1000+ career consultations, guiding individuals on their transformative journey to secure their dream jobs.",
      show: true,
      lis: [
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Experienced career experts for guidance",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "1000+ successful career transitions",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Personalized support for dream jobs",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Tailored consultations to meet your needs",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "End-to-end personalized assistance",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Proven methods for software roles",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Practical insights for entering software",
        },
      ],
    },
    {
      textStart: "Not sure if your resume is ready ?",
      h2: "Let our experienced engineers review it for you",
      copy: "We offer resume review services conducted by experienced engineers from diverse fields. Whether front-end, full-stack.",
      show: false,
      lis: [
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Resume reviews by experienced engineers from diverse fields",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Customized resume advice for software domains",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Gain industry-specific insights",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Tailored resume support for your dream job ",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Access effective methods to highlight skills",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "1000+ successful software engineering career transitions",
        },
        {
          iconUrl: "/svg-icons/arrow.svg",
          text: "Find success stories showcasing career transformations",
        },
      ],
    },
    {
      textStart: "Looking for experienced pro to consult?",
      h2: "Expert Guidance for Your Career",
      copy: "Our team of experienced engineers is here to provide personalized guidance for your career journey. Whether you're in front-end, back-end, or any other software-related domains.",
      show: false,
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
      show: false,
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

  const imageData = ref([
    {
      alt: "software",
      imgUrl: "/index/code.png",
      copy: "Thinking about getting into software engineering?",
      show: true,
    },
    {
      alt: "resume-review",
      imgUrl: "/index/resume-review.png",
      copy: "Not sure if your resume is ready?",
      show: false,
    },
    {
      alt: "consult",
      imgUrl: "/index/consulting.png",
      copy: "Looking for experienced pro to consult?",
      show: false,
    },
    {
      alt: "talk",
      imgUrl: "/index/talk.png",
      copy: "Or... you just want to have someone to talk to?",
      show: false,
    },
  ]);

  const buttons = ref([
    { buttonUrl: "/index/test.png", alt: "button", active: true },
    { buttonUrl: "/index/test2.png", alt: "button", active: false },
    { buttonUrl: "/index/test3.png", alt: "button", active: false },
    { buttonUrl: "/index/test4.png", alt: "button", active: false },
  ]);

  const toggle = (index) => {
    imageData.value = imageData.value.map((image, idx) => ({
      ...image,
      // 檢查是否為需要顯示的文字
      show: idx === index
    }));

    copies.value = copies.value.map((copy, idx) => ({
      ...copy,
      // 檢查是否為需要顯示的圖片
      show: idx === index
    }));

    buttons.value = buttons.value.map((button, idx) => ({
      ...button,
      active: idx === index
    }))
  };

  const whichCopy = computed(() => {
    return copies.value.filter(copy => {
      return copy.show;
    })
  });

  const whichImage = computed(() => {
    return imageData.value.filter(image => {
      return image.show;
    })
  })
</script>
<style scoped lang="scss">
  .wrapper {
    background-color: white;
    padding-top: 20px;
    /* // padding-bottom: 50px; */
  }

  .container {
    max-width: 1200px;
    margin: 50px auto;

    row {
      max-height: 630px;
      overflow: hidden;
    }

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
        filter: grayscale(100%);
        border-radius: 10px;
        transition: 0.3s;
      }

      .active {
        filter: none;
      }
    }
  }

  @media (max-width: 1200px) {
    .cards-container {
      margin-top: 2rem;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
</style>