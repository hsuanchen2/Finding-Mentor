<template>
  <section class="mentor-profile">
    <header>
      <div class="user-image-wrapper">
        <img src="@/../public/user-img/test.png" class="user-image" alt="">
        <span class="status"></span>
      </div>
      <div class="user-info-text">
        <h3>Patrick Shyu</h3>
        <h4>ex Google ex Facebook techlead</h4>
        <p class="location"><i class="fa-solid fa-location-dot" style="color: #ad76db;"></i>United State</p>
      </div>
      <div class="invitation-wrapper">
        <button class="add-to-favorite">
          <i class="fa-regular fa-envelope"></i> Leave a message
        </button>
        <button class="add-to-favorite">
          <i class="fa-regular fa-paper-plane"></i> Send a message
        </button>
      </div>
    </header>
    <div class="row user-info">
      <aside class="col col-12 col-md-5">
        <div class="aside-wrapper">
          <h3>Expertise</h3>
          <p>Full-Stack Engineering</p>
          <h3>Charge</h3>
          <p>30$ / hour</p>
          <h3>Location</h3>
          <p>United State of America</p>
          <h3>Skills</h3>
          <span class="tags"> <skill-tag>Javascript</skill-tag>
            <skill-tag>Javascript</skill-tag><skill-tag>Javascript</skill-tag><skill-tag>Javascript</skill-tag><skill-tag>Javascript</skill-tag></span>
        </div>
      </aside>
      <main class="col col-12 col-md-7">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit rem adipisci quis quos exercitationem iusto
          nam cum officiis quam et animi, nesciunt deserunt. Labore architecto autem blanditiis rem quibusdam.</p>
      </main>
    </div>
  </section>
</template>
<script setup>
import { ref, reactive } from "vue";
import SkillTag from "@/components/ui/SkillTag.vue";
</script>
<style lang="scss" scoped>
.mentor-profile {
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid lightgray;
  border-radius: 10px;
  height: 500px;
  // background-color: white;
  box-shadow: $light-card-shadow;

  header {
    display: flex;
    align-items: center;
    gap: 25px;
    border-bottom: 1px solid lightgray;
    padding: 15px 20px 15px 20px;

    .user-image {
      width: 80px;
      height: 80px;
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

      h4 {
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
    }
  }

  .user-info {
    aside {
      border-right: 1px solid lightgray;
      padding-bottom: 0 !important;
      .aside-wrapper {
        padding: 15px 20px 15px 20px;
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
</style>
