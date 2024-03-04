<template>
  <section class="wrapper row">
    <aside class="chat-list col col-xl-3 col-6 d-none d-xl-block">
      <h4 class="title">Chats</h4>
      <input type="text" placeholder="Search user" class="search-input" />
      <div class="chat-buttons-container">
        <button class="chat-button">
          <img src="@/../public/user-img/test2.jpg" class="chat-button-img" alt="">
          <div class="user-info">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </button>
        <button class="chat-button">
          <img src="@/../public/user-img/test2.jpg" class="chat-button-img" alt="">
          <div class="user-info">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </button>
        <button class="chat-button">
          <img src="@/../public/user-img/test2.jpg" class="chat-button-img" alt="">
          <div class="user-info">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </button>
        <button class="chat-button">
          <img src="@/../public/user-img/test2.jpg" class="chat-button-img" alt="">
          <div class="user-info">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </button>
        <button class="chat-button">
          <img src="@/../public/user-img/test2.jpg" class="chat-button-img" alt="">
          <div class="user-info">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </button>
        <button class="chat-button">
          <img src="@/../public/user-img/test2.jpg" class="chat-button-img" alt="">
          <div class="user-info">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </button>
        <button class="chat-button">
          <img src="@/../public/user-img/test2.jpg" class="chat-button-img" alt="">
          <div class="user-info">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </button>
        <button class="chat-button">
          <img src="@/../public/user-img/test2.jpg" class="chat-button-img" alt="">
          <div class="user-info">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </button>
        <button class="chat-button">
          <img src="@/../public/user-img/test2.jpg" class="chat-button-img" alt="">
          <div class="user-info">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </button>
        <button class="chat-button">
          <img src="@/../public/user-img/test2.jpg" class="chat-button-img" alt="">
          <div class="user-info">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </button>
      </div>
    </aside>
    <div class="chat-box col col-xl-6">
      <section>
        <header class="chat-header">
          <img class="user-avatar" src="@/../public/user-img/test2.jpg" alt="" />
          <div class="text-wrapper">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </header>
        <div class="chat-area">
          <div class="chat incoming">
            <img src="@/../public/user-img/test2.jpg" alt="">
            <div class="details">
              <p>Lorem ipsum dolor sit amet</p>
              <div class="time-stamp">
                <span>10:30 AM</span>
              </div>
            </div>

          </div>
          <div class="chat outgoing">
            <div class="details">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <div class="time-stamp">
                <span>10:30 AM</span>
              </div>
            </div>
          </div>
          <div class="chat outgoing">
            <div class="details">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <div class="time-stamp">
                <span>10:30 AM</span>
              </div>
            </div>
          </div>
          <div class="chat outgoing">
            <div class="details">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <div class="time-stamp">
                <span>10:30 AM</span>
              </div>
            </div>
          </div>
          <div class="chat outgoing">
            <div class="details">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <div class="time-stamp">
                <span>10:30 AM</span>
              </div>
            </div>
          </div>
          <div class="chat outgoing">
            <div class="details">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <div class="time-stamp">
                <span>10:30 AM</span>
              </div>
            </div>
          </div>
        </div>
        <form action="#" class="text-input-form">
          <input class="input-area" type="text" placeholder="Type a message" />
          <button type="submit" class="submit-button"><i class="fa-regular fa-paper-plane"></i></button>
        </form>
      </section>
    </div>
    <div class="col col-xl-3 contact-info">
      <header class="">
        <h4>Contact Info</h4>
      </header>
      <main class="contact-user-info">
        <div class="contact-user-card">
          <img src="@/../public/user-img/test2.jpg" class="user-avatar" alt="">
          <div class="contact-title-wrapper">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
            <p>&#x2B50 4.4 (32)</p>
          </div>
        </div>
        <div class="contact-user-details">
          <div class="email">
            <h4>Email</h4>
            <p>techleadhd@gmail.com</p>
          </div>
          <div class="location">
            <h4>Location</h4>
            <p>United States</p>
          </div>
          <div class="email">
            <h4>Charge</h4>
            <p>$45 / hour</p>
          </div>
          <div class="location">
            <h4>Expertise</h4>
            <p>Software engineer</p>
          </div>
          <div class="skills">
            <h4>Skills</h4>
            <div class="skills-tags">
              <SkillTag>Vue</SkillTag>
              <SkillTag>Nodejs</SkillTag> 
            </div>
          </div>
        </div>

      </main>
    </div>
  </section>
</template>
<script lang="ts" setup>
import SkillTag from "@/components/ui/SkillTag.vue";
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: $light-card-shadow;
  box-sizing: content-box;
}

.chat-list {
  padding-left: 20px;
  padding-top: 20px;
}

.search-input {
  width: 90%;
  margin-left: 10px;
  padding-left: 10px;
  border: none;
  border-radius: 4rem;
  outline: none;

  &::placeholder {
    font: 14px;
  }
}

.title {
  padding-left: 10px;
}

.chat-buttons-container {
  padding-top: 5px;
  padding-right: 5px;
  height: 460px;
  overflow-y: auto;
  margin: 10px 0 15px 0;
  padding-left: 5px;

  h4 {
    color: $main-text-color;
  }

}

.chat-button {
  box-shadow: $light-card-shadow;
  border-radius: 5px;
  list-style-type: none;
  height: 45px;
  background-color: white;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: rgb(184, 184, 184);
  }

  img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-left: 10px;

    h3 {
      font-size: 14px;
      color: $main-text-color;
      margin-bottom: 0;
    }

    h4 {
      font-size: 12px;
      color: $minor-text-color;
      margin-bottom: 0;
    }
  }
}

.chat-box {
  background-color: white;
  border-radius: 10px;
  padding: 0;
}

.chat-area {
  padding: 15px 20px;
  height: 450px;
  overflow: auto;


  .incoming {
    .time-stamp {
      font-size: 12px;
      color: $minor-text-color;
      font-style: italic;
      padding-top: 3px;
    }
  }

  .outgoing {
    .time-stamp {
      font-size: 12px;
      color: $minor-text-color;
      font-style: italic;
      display: flex;
      justify-content: end;
      padding-top: 3px;
    }
  }

  p {
    word-wrap: break-word;
  }

  .chat {
    margin-bottom: 15px;

    img {
      width: 35px;
      height: 35px;
      margin-right: 15px;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: $light-card-shadow;
    }
  }

  .chat.incoming {
    display: flex;

    .details {
      margin-right: auto;
      overflow: auto;
      max-width: calc(100% - 200px);
    }

    p {
      border-radius: 0 18px 18px 18px;
      padding: 5px 13px;
      background-color: $main-purple;
      color: #fff;
      margin: 0;
    }
  }

  .chat.outgoing {
    display: flex;

    .details {
      margin-left: auto;
      overflow: auto;
      max-width: calc(100% - 200px);
    }

    p {
      border-radius: 18px 0 18px 18px;
      padding: 5px 13px;
      background-color: $main-cyan;
      color: #fff;
      margin: 0;
    }
  }
}

.chat-header {
  display: flex;
  padding-top: 10px;
  padding-left: 15px;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: $light-card-shadow;
  }

  .text-wrapper {
    margin-left: 20px;

    h3 {
      font-size: 18px;
      margin-bottom: 0;
    }

    h4 {
      font-size: 14px;
      font-weight: 400;
      font-style: italic;
      color: $minor-text-color;
      margin-bottom: 0;
    }
  }
}

.contact-info {
  padding-top: 20px;

  header h4 {
    text-align: center;
  }

  main.contact-user-info {
    .skills-tags {
      display: flex;
      overflow-x: auto;
      gap: 5px;
      margin-top: 7px;
    }

    .contact-user-details {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-left: 20px;

      h4 {
        font-size: 14px;
        margin-bottom: 0;
        color: $main-text-color;
      }

      p {
        font-size: 15px;
        margin-bottom: 0;
        word-wrap: break-word;
        overflow-wrap: break-word;
        color: $minor-text-color;
      }
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .contact-user-card {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .contact-title-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        margin-bottom: 25px;

        h3 {
          font-size: 18px;
          color: $main-text-color;
          margin-bottom: 0;
        }

        h4 {
          font-size: 14px;
          margin-bottom: 0;
          color: $minor-text-color;
          font-weight: 400;
          font-style: italic;
        }

        p {
          font-size: 14px;
          color: $minor-text-color;
          margin-bottom: 0;
        }
      }
    }
  }
}

.text-input-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightgray;
  padding-left: 10px;
  padding-right: 10px;
  padding: 10px 20px;

  .input-area {
    height: 40px;
    width: calc(100% - 58px);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    border-image: initial;
    padding: 0px 13px;
    border-radius: 5px;
    outline: none;
  }

  .submit-button {
    width: 55px;
    height: 40px;
    font-size: 19px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    border-radius: 5px 5px 5px 5px;
    background-color: $main-button-color;
    margin-left: 10px;
    transition: .3s;

    &:hover {
      background-color: lighten($main-button-color, 10%);
    }
  }
}
</style>
