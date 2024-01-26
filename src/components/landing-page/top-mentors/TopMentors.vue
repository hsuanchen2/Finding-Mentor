<template>
  <section class="container">
    <div class="top-mentors-copy">
      <h2>Discover Our Highly-Rated Experts!</h2>
      <p>
        At our service, you'll find a vast network of professionals, numbering
        over 1000, from various industries. They are here to offer a wide array
        of consultation services tailored to your needs.
        <router-link to="/" class="cta-link">
          Discover More <i class="fas fa-arrow-right"></i></router-link>
      </p>
    </div>
    <Splide ref="splide" :options="splideSettings" aria-label="Senpai-Card">
      <SplideSlide v-for="mentor in mentorsArray" :key="mentor.id" class="splide__slide">
        <mentor-card :userId="mentor.id" :jobTitle="mentor.jobTitle" :firstName="mentor.firstName"
          :lastName="mentor.lastName" :desc="mentor.experience" :rate="mentor.hourlyRate" :userImage="mentor.userImage"
          :jobRating="mentor.jobRating">
        </mentor-card>
      </SplideSlide>
    </Splide>
    <div class="button-group">
      <button @click="btnPrev">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
        </svg>
      </button>

      <button @click="btnNext">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="flip">
          <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
        </svg>
      </button>
    </div>
  </section>
</template>
<script setup>
import { ref, reactive, onMounted, onBeforeMount, computed, nextTick } from "vue";
import { useStore } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css/core";
import "@splidejs/splide/css/core";
// Default theme
import "@splidejs/splide/css";
// or only core styles
import "@splidejs/splide/css/core";
import MentorCard from "@/components/ui/main-page/MentorCard.vue";
const store = useStore();
const splideSettings = reactive({
  pagination: false,
  rewind: false, // not this
  type: "loop",
  start: 4,
  speed: 500,
  arrows: false,
  lazyLoad: "nearby",
  drag: true,
  autoWidth: true,
  gap: "1.875rem",
  focus: "center", // not this
  breakpoints: {
    mediaQuery: "max",
    1200: {
      perPage: 7, // 4 slides per page when window width is 1200px or less
      gap: "1rem",
      focus: "center",
      type: "loop",
      rewind: false,
    },
    768: {
      perPage: 3, // 3 slides per page when window width is 768px or less
      gap: "1rem",
      focus: "center",
      type: "loop",
      gap: "1rem",
      rewind: false,
    },
    440: {
      perPage: 1, // 1 slide per page when window width is 440px or less
      gap: "10px",
      focus: "center",
      type: "loop",
      rewind: false,
      padding: {
        right: "15px",
      },
    },
  },
});
const mentorsArray = ref([]);

const splide = ref(null);
const btnPrev = () => {
  // console.log(splide.value);
  splide.value.go("-1");
};

const btnNext = () => {
  // console.log(splide.value);
  splide.value.go("+1");
};

const loadDisplayedMentors = async () => {
  await store.dispatch("coaches/loadLandingPageMentors");
  const coaches = store.getters["coaches/landingPageMentors"];
  mentorsArray.value = coaches;
  // console.log(mentorsArray.value);
}

loadDisplayedMentors();
onMounted(() => {
  splide.value.splide.refresh();
})
</script>
<style scoped lang="scss">
.splide {
  -webkit-mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 2%, rgba(255, 255, 255, 1) 98%, rgba(255, 255, 255, 0) 100%);
}

.splide__list {
  li {
    width: auto;
    margin-top: 10px;
    margin-left: 7px;
    margin-bottom: 10px;
  }
}

.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  .row {
    width: 100%;
    display: flex;
    gap: 5px;
    justify-content: space-around;
    align-items: center;
  }

  .button-group {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    gap: 20px;

    button {
      border: none;
      background-color: white;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      box-shadow: $light-card-shadow;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      position: relative;
      transition: 0.3s;

      .flip {
        transform: scaleX(-1);
      }

      svg {
        width: 22px;
        height: 22px;
        fill: #9966ff;
        transition: white;
        position: absolute;
        top: 11px;
        left: 12px;
      }
    }

    button:hover {
      background-color: $main-button-color;
    }

    button:hover svg {
      fill: white;
    }
  }
}

.top-mentors-copy {
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 40px;

  h2 {
    color: $main-text-color;
    margin-bottom: 20px;
    font-size: 2.25rem;
    font-weight: 700;
  }

  p {
    color: $miner-text-color;
    font-size: 1.2rem;

    .cta-link {
      text-decoration: none;
      color: $main-purple;
      font-weight: 600;
      transition: 0.3s ease-in;
      position: relative;
      display: inline-block;

      i {
        font-size: 14px;
      }
    }

    .cta-link:hover {
      color: $main-button-color;
    }

    .cta-link:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: $main-button-color;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    .cta-link:hover:after {
      width: 100%;
      left: 0;
    }
  }
}

// mobile
@media (max-width: 768px) {
  .top-mentors-copy {
    padding: 0;
  }
}
</style>
