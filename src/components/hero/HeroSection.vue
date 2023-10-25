<template>
  <section class="hero-section container">
    <div class="row">
      <div class="hero-text col-lg-6 col-md-12">
        <h2>
          The Companion on Your <br />
          <span class="career-text">{{ careerValue }}</span>
          <span class="blinking-cursor">|</span><br />Career Journey
        </h2>
        <p>
          We have successfully matched over a thousand career consultations,
          helping them discover their dream jobs.
        </p>
        <div class="hero-section-cta-button">
          <router-link to="/auth" class="hero-start-now"
            ><span>Start now <i class="fas fa-arrow-right"></i></span>
          </router-link>
          <router-link to="/auth" class="hero-register"
            ><span>Register <i class="fas fa-arrow-right"></i></span
          ></router-link>
        </div>
      </div>
      <div class="hero-image-container col-lg-6 col-md-12">
        <img
          src="../../../public/index/hero-image.png"
          alt="profession"
          class="hero-image-main"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        />
        <img
          src="../../../public/index/hero-image-miner.png"
          alt="profession"
          class="hero-image-miner-one"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        />
        <img
          src="../../../public/index/test.svg"
          alt="profession"
          class="hero-image-miner-second"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-easing="ease-in-out"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const careerValue = ref("");
const isTyping = ref(false);
const displayTextArray = ref([
  "Front-End Engineer",
  "Back-End Engineer",
  "Full-Stack Engineer",
  "DevOps",
]);
const typingSpeed = ref(200);
const erasingSpeed = ref(100);
const nextTextDelay = ref(2000);
const displayTextArrayIndex = ref(0);
const charIndex = ref(0); // 某一個職稱的字數

AOS.init();

const typeText = () => {
  // index小於該文字長度時，則代表要開始打字
  if (
    charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length
  ) {
    // console.log(charIndex.value);
    if (!isTyping.value) isTyping.value = true;
    careerValue.value += displayTextArray.value[
      displayTextArrayIndex.value
    ].charAt(charIndex.value);
    charIndex.value++;
    setTimeout(typeText, typingSpeed.value);
  } else {
    // 某個職稱的字打完了，開始刪除
    isTyping.value = false;
    setTimeout(eraseText, nextTextDelay.value);
  }
};

const eraseText = () => {
  if (charIndex.value > 0) {
    if (!isTyping.value) isTyping.value = true;
    careerValue.value = displayTextArray.value[
      displayTextArrayIndex.value
    ].substring(0, charIndex.value - 1);
    charIndex.value -= 1;
    setTimeout(eraseText, erasingSpeed.value);
  } else {
    // charIndex == 0, 代表字已經刪除完畢，要開始打下一個字了
    isTyping.value = false;
    // 把字刪除後，往後一個單字
    displayTextArrayIndex.value++;
    // 若所有字都打過了，則從0開始打
    if (displayTextArrayIndex.value >= displayTextArray.value.length) {
      displayTextArrayIndex.value = 0;
    }
    setTimeout(typeText, typingSpeed.value + 1000);
  }
};
typeText();
</script>
<style scoped lang="scss">
.hero-section {
  max-width: 1200px;
  margin: 50px auto 0 auto;

  .row {
    width: 100%;
  }

  .hero-text {
    color: #0a2540;

    h2 {
      font-size: 3.25rem;
      font-weight: 700;
      line-height: 1.5;

      .career-text {
        color: #635bff;
        border-bottom: 2px solid rgb(53, 200, 249);
      }
    }

    p {
      margin-top: 25px;
      color: #425466;
      font-family: "Roboto", sans-serif;
      letter-spacing: 0.1em;
      font-size: 1.2rem;
      width: 80%;
    }
  }

  .hero-section-cta-button {
    margin-top: 40px;

    .hero-start-now {
      span {
        display: inline-block;
        transition: 0.3s ease;
        position: relative;
        font-family: "Roboto", sans-serif;
        width: 70px;
        text-align: center;
        font-size: 16px;
      }

      a {
        text-decoration: none;
        position: relative;
      }

      i {
        position: absolute;
        opacity: 0;
        top: 29%;
        right: -12px;
        transition: 0.3s;
        font-size: 12px;
      }

      &:hover span {
        transform: translate3d(-0.2rem, 0, 0);
      }

      &:hover span i {
        opacity: 1;
      }
    }

    .hero-start-now {
      color: white;
      background-color: #635bff;
      padding: 0.5rem 1rem;
      border-radius: 15px;
      margin-right: 20px;
      font-size: 14px;
    }

    .hero-start-now:hover {
      background-color: rgba(99, 91, 255, 0.8);
    }

    .hero-register {
      color: #0a2540;
      text-decoration: none;

      span {
        display: inline-block;
        transition: 0.3s ease;
        position: relative;
        font-family: "Roboto", sans-serif;
        width: 70px;
        text-align: center;
      }

      a {
        text-decoration: none;
        position: relative;
      }

      i {
        position: absolute;
        opacity: 0;
        top: 29%;
        right: -12px;
        transition: 0.3s;
        font-size: 12px;
      }

      &:hover span {
        transform: translate3d(-0.2rem, 0, 0);
        color: #635bff;
        font-weight: 500;
      }

      &:hover span i {
        opacity: 1;
      }
    }
  }

  .hero-image-container {
    display: flex;
    justify-content: end;
    position: relative;

    // max-height: 467.29px;
    .hero-image-main {
      width: 100%;
      max-width: 500px;
      height: auto;
      object-fit: contain;
      box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      // border-radius: 10px;
    }

    .hero-image-miner-one {
      width: 45%;
      position: absolute;
      left: -2%;
      bottom: 20px;
      border: 3px solid white;
      border-radius: 10px;
    }

    .hero-image-miner-second {
      width: 40%;
      position: absolute;
      top: 100px;
      left: 3%;
      border-radius: 10px;
      bottom: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }
  }

  // blinking cursor animation
  .blinking-cursor {
    animation: blink 1.5s step-end infinite;
  }

  @keyframes blink {
    from,
    to {
      color: transparent;
    }

    50% {
      color: #2c3e50;
    }
  }
}

// responsive

@media (max-width: 768px) {
  .hero-image-container {
    margin-top: 50px;
  }
}
</style>
