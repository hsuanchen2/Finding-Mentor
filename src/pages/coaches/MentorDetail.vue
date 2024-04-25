<template>
  <section class="mentor-profile mx-2 mx-md-auto">
    <header>
      <div class="user-image-wrapper">
        <img :src="mentorDetail.userimage" class="user-image" alt="">
        <span class="status"></span>
      </div>
      <div class="user-info-text">
        <h3>{{ mentorDetail.firstName }} {{ mentorDetail.lastName }}</h3>
        <h4 class="user-title">{{ mentorDetail.jobTitle }}</h4>
        <h4>&#x2B50 {{ mentorDetail.jobRating }} ({{ mentorDetail.jobsDone }}) </h4>
        <p class="location"><i class="fa-solid fa-location-dot" style="color: #ad76db;"></i>{{ mentorDetail.location }}
        </p>
      </div>

      <div class="invitation-wrapper">
        <button>
          <router-link :to="contactLink2"><i class="fa-regular fa-envelope"></i> Leave a message</router-link>
        </button>
        <button type="button" v-if="!isItYou">
          <router-link :to="'/chat/' + $route.params.id">
            <i class="fa-regular fa-paper-plane"></i> Send a message
          </router-link>
        </button>
      </div>
    </header>

    <div class="row user-info">
      <aside class="col col-12 col-md-4">
        <div class="aside-wrapper">
          <h3><i class="fa-solid fa-code"></i> Expertise</h3>
          <p>{{ mentorDetail.jobTitle }}</p>
          <h3><i class="fa-solid fa-dollar-sign"></i> Charge</h3>
          <p>{{ mentorDetail.hourlyRate }} /hour</p>
          <h3><i class="fa-solid fa-location-dot"></i> Location</h3>
          <p>{{ mentorDetail.location }}</p>
          <h3><i class="fa-solid fa-scroll"></i> Skills</h3>
          <p></p>
          <span class="tags">
            <span class="tags">
              <skill-tag v-for="(tag, index) in mentorDetail.skillsTag" :key="index">{{ tag }}</skill-tag>
            </span>
          </span>
        </div>
      </aside>
      <main class="col col-12 col-md-8">
        <div class="about-me">
          <h3>About Me</h3>
          <p>{{ mentorDetail.aboutMe }}</p>
        </div>
        <div class="work-experience">
          <h3>Work Experience</h3>
          <p>{{ mentorDetail.workExp }}</p>
        </div>
      </main>
    </div>
    <router-view :key="$route.meta.key"></router-view>
  </section>
</template>
<script setup lang="ts">
import { ref, Ref, reactive, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import SkillTag from "@/components/ui/SkillTag.vue";
const route = useRoute();
const store = useStore();

interface MentorDetail {
  userimage: String,
  firstName: String,
  lastName: String,
  jobTitle: String,
  jobRating: Number,
  hourlyRate: Number,
  location: String,
  skillsTag: string[],
  aboutMe: String,
  workExp: String,
  jobsDone: Number,
  id: String | string[],
}

const mentorDetail = ref<MentorDetail>({
  userimage: '',
  firstName: '',
  lastName: '',
  jobTitle: '',
  jobRating: 0,
  hourlyRate: 0,
  location: '',
  skillsTag: [],
  aboutMe: '',
  workExp: '',
  jobsDone: 0,
  id: '',
});


const isItYou = computed(() => {
  return route.params.id === localStorage.getItem("userId");
})

const contactLink = computed((): string => {
  if (!route.path.endsWith("/contact")) {
    return route.path + "/contact";
  } else {
    return route.path
  }
});

const contactLink2 = computed((): string => {
  const isContact = route.path.endsWith("contact");
  return isContact ? route.path : route.path + "/contact";
})


const setMentor = async () => {
  await store.dispatch("coaches/loadSpecificMentorInfo", route.params.id);
  const data = (store.getters["coaches/currentMentor"]);
  mentorDetail.value.userimage = data.userImage;
  mentorDetail.value.firstName = data.firstName;
  mentorDetail.value.lastName = data.lastName;
  mentorDetail.value.jobTitle = data.jobTitle;
  mentorDetail.value.jobRating = data.jobRating;
  mentorDetail.value.hourlyRate = data.hourlyRate;
  mentorDetail.value.location = data.location;
  mentorDetail.value.skillsTag = data.skills;
  mentorDetail.value.aboutMe = data.aboutMe;
  mentorDetail.value.workExp = data.experience;
  mentorDetail.value.jobsDone = data.jobsDone;
  mentorDetail.value.id = route.params.id;
}

onMounted(async () => {
  await setMentor();
});



</script>

<style lang="scss" scoped>
.mentor-profile {
  max-width: 1000px;
  margin: 50px auto;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: $light-card-shadow;
  background-color: white;

  header {
    display: flex;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
    border-bottom: 1px solid lightgray;
    padding: 20px 20px 20px 20px;

    .user-image {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user-info-text {
      display: flex;
      flex-direction: column;
      gap: 3px;

      h3 {
        font-size: 1rem;
        margin-bottom: 0;
      }

      h4,
      p {
        font-size: 0.9rem;
        margin-bottom: 0;
      }

      .user-title {
        color: $minor-text-color;
        font-style: italic;
      }

      i {
        margin-right: 5px;
      }
    }

    .user-image-wrapper {
      position: relative;

      .status {
        position: absolute;
        background-color: green;
        width: 15px;
        height: 15px;
        bottom: -2px;
        right: 10px;
        border-radius: 50%;
        border: 2px solid white;
      }
    }
  }

  .row {
    padding: 0;
    --bs-gutter-x: 0;
  }

  .invitation-wrapper {
    margin-left: auto;
    display: flex;
    gap: 13px;

    button {
      border: 1px solid lightgray;
      border-radius: 5px;
      background-color: transparent;
      transition: .3s;
      color: $minor-text-color;

      &:hover {
        background-color: lightgray;
      }

      a {
        text-decoration: none;
        color: $minor-text-color;
      }

      i {
        padding-right: 5px;
      }
    }
  }

  .user-info {
    border-bottom: 1px solid lightgray;

    i {
      color: $main-cyan;
      font-size: 1rem;
      padding-right: 5px;
    }

    aside {
      border-right: 1px solid lightgray;

      .aside-wrapper {
        padding: 25px 25px 25px 25px;
      }

      h3 {
        color: $main-text-color;
        font-size: 1.2rem;
      }

      p {
        color: $minor-text-color;
      }
    }

    main {
      padding: 25px 25px 25px 25px;
      text-overflow: ellipsis;

      h3 {
        font-size: 1.2rem;
        color: $main-text-color;
      }

      p {
        color: $minor-text-color;
        line-height: 1.6;
      }
    }
  }

  .tags {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;

    button {
      display: inline;
    }
  }
}

@media (max-width:768px) {
  .mentor-profile header {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding-left: 5px;
    padding-right: 5px;

    .invitation-wrapper {
      margin: 0 auto;
    }

    .user-info-text {
      text-align: center;
    }
  }

  aside {
    border-left: none;
    border-bottom: 1px solid lightgray;
  }
}
</style>
