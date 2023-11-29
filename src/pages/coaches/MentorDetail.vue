<template>
  <section class="mentor-profile mx-2 mx-md-auto">
    <header>
      <div class="user-image-wrapper">
        <img src="@/../public/user-img/test.png" class="user-image" alt="">
        <span class="status"></span>
      </div>
      <div class="user-info-text">
        <h3>Patrick Shyu</h3>
        <h4 class="user-title">ex Google ex Facebook techlead</h4>
        <h4>&#x2B50 4.2 (25)</h4>
        <p class="location"><i class="fa-solid fa-location-dot" style="color: #ad76db;"></i>United State</p>
      </div>

      <div class="invitation-wrapper">
        <button>
          <router-link :to="contactLink2"><i class="fa-regular fa-envelope"></i> Leave a message</router-link>
        </button>
        <button class="">
          <i class="fa-regular fa-paper-plane"></i> Send a message
        </button>
      </div>
    </header>

    <div class="row user-info">
      <aside class="col col-12 col-md-4">
        <div class="aside-wrapper">
          <h3><i class="fa-solid fa-code"></i> Expertise</h3>
          <p>Full-Stack Engineering</p>
          <h3><i class="fa-solid fa-dollar-sign"></i> Charge</h3>
          <p>30$ / hour</p>
          <h3><i class="fa-solid fa-location-dot"></i> Location</h3>
          <p>United State of America</p>
          <h3><i class="fa-solid fa-scroll"></i> Skills</h3>
          <p></p>
          <span class="tags"> <skill-tag>Javascript</skill-tag>
            <skill-tag>Java</skill-tag><skill-tag>Python</skill-tag><skill-tag>C#</skill-tag><skill-tag>C++</skill-tag></span>
        </div>
      </aside>
      <main class="col col-12 col-md-8">
        <div class="about-me">
          <h3>About Me</h3>
          <p>{{ test }}</p>
        </div>
        <div class="work-experience">
          <h3>Work Experience</h3>
          <p>{{ wrokExp }}</p>
        </div>
        <div class="work-experience">
          <h3>Work Experience</h3>
          <p>{{ wrokExp }}</p>
        </div>
        <div class="work-experience">
          <h3>Work Experience</h3>
          <p>{{ wrokExp }}</p>
        </div>
      </main>
    </div>
    <router-view></router-view>
  </section>
</template>
<script setup lang="ts">
import { ref, Ref, reactive, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import SkillTag from "@/components/ui/SkillTag.vue";
const route = useRoute();
const test: Ref<string> = ref("With a rich background in leading-edge technology development honed at industry giants Google and Facebook, I'm a seasoned tech professional passionate about creating impactful solutions and driving innovation. My journey in the tech realm spans years of hands-on experience, strategic leadership, and a relentless pursuit of excellence.");
const wrokExp: Ref<string> = ref("📚 A firm believer in continuous learning, I embrace new technologies and methodologies, ensuring my skills are always at the cutting edge, ready to meet evolving industry demands.Let's collaborate and explore the possibilities of transforming innovative ideas into reality !");

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
</script>

<style lang="scss" scoped>
.mentor-profile {
  max-width: 1000px;
  margin: 50px auto;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: $light-card-shadow;

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
        color: $miner-text-color;
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
      color: $miner-text-color;

      &:hover {
        background-color: lightgray;
      }

      a {
        text-decoration: none;
        color: $miner-text-color;
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
        color: $miner-text-color;
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
        color: $miner-text-color;
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
