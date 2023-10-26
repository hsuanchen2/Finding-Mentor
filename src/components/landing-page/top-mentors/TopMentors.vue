<template>
  <!-- bs version -->
  <!-- <section class="container">
        <div class="row">
            <mentor-card v-for="mentor in userArray" :userId="mentor.userId" :jobTitle="mentor.jobTitle"
                :userName="mentor.userName" :desc="mentor.desc" :rate="mentor.rate" :jobRating="mentor.jobRating"
                class="col col-lg-3 col-md-6 col-sm-12 splide__slide">
            </mentor-card>
        </div>
    </section> -->

  <section class="container">
    <Splide :options="splideSettings" aria-label="Senpai Card" class="row">
      <SplideSlide
        v-for="mentor in userArray"
        :key="mentor.userId"
        class="col col-lg-3 col-md-6 col-sm-12 splide__slide"
      >
        <mentor-card
          :userId="mentor.userId"
          :jobTitle="mentor.jobTitle"
          :userName="mentor.userName"
          :desc="mentor.desc"
          :rate="mentor.rate"
          :jobRating="mentor.jobRating"
        >
        </mentor-card>
      </SplideSlide>
    </Splide>
  </section>
</template>
<script setup>
// https://splidejs.com/guides/options/
import { ref, reactive, onMounted } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css/core";
import "@splidejs/splide/css/core";
import MentorCard from "@/components/ui/MentorCard.vue";
const splideSettings = ref({
  pagination: false,
  rewind: true,
  perPage: 4,
  speed: 2000,
  //   autoWidth: true,
  lazyLoad: true,
  perMove: 1,
  omitEnd: true,
  drag: "free",
  //   padding: 20,
  prev: "splide__arrow--prev your-class-prev",
  next: "splide__arrow--next your-class-next",
});

const userArray = ref([
  {
    userId: 123,
    jobTitle: "Ex Gooogle Techlead",
    userName: "Partick Shyu",
    desc: "Tech Lead of App Architecture & Core Features for the YouTube iOS app.",
    rate: 15,
    jobRating: "4.6 (36)",
  },
  {
    userId: 123,
    jobTitle: "Ex Meta Techlead",
    userName: "Jonathan Ma",
    desc: "Tech Lead of App Architecture & Core Features for the YouTube iOS app.",
    rate: 25,
    jobRating: "4.2 (29)",
  },
  {
    userId: 124,
    jobTitle: "Senior Software Engineer",
    userName: "Jane Doe",
    desc: "Experienced software engineer with a passion for building scalable web applications.",
    rate: 35,
    jobRating: "4.0 (29)",
  },
  {
    userId: 125,
    jobTitle: "Product Designer",
    userName: "John Smith",
    desc: "Creative and detail-oriented product designer with a focus on user experience and interface design.",
    rate: 55,
    jobRating: "3.6 (66)",
  },
  {
    userId: 125,
    jobTitle: "Product Designer",
    userName: "John Smith",
    desc: "Creative and detail-oriented product designer with a focus on user experience and interface design.",
    rate: 55,
    jobRating: "3.6 (66)",
  },
  {
    userId: 125,
    jobTitle: "Product Designer",
    userName: "John Smith",
    desc: "Creative and detail-oriented product designer with a focus on user experience and interface design.",
    rate: 55,
    jobRating: "3.6 (66)",
  },
  {
    userId: 125,
    jobTitle: "Product Designer",
    userName: "John Smith",
    desc: "Creative and detail-oriented product designer with a focus on user experience and interface design.",
    rate: 55,
    jobRating: "3.6 (66)",
  },
  {
    userId: 125,
    jobTitle: "Product Designer",
    userName: "John Smith",
    desc: "Creative and detail-oriented product designer with a focus on user experience and interface design.",
    rate: 55,
    jobRating: "3.6 (66)",
  },
]);
</script>
<style scoped lang="scss">
.splide__arrows {
  justify-content: end;
}
.splide__list {
  height: 300px;
  align-items: center;
  li {
    margin-top: 10px;
    margin-left: 7px;
    margin-bottom: 10px;
  }
}
.container {
  max-width: 1200px;

  .row {
    width: 100%;
    display: flex;
    gap: 5px;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
