<template>
  <section class="wrapper row">
    <aside class="chat-list col col-3">
      <h4 class="title">Chats</h4>
      <input type="text" placeholder="Search user" class="search-input" />
      <div class="chat-buttons-container">
        <button class="chat-button"></button>
        <button class="chat-button"></button>
        <button class="chat-button"></button>
        <button class="chat-button"></button>
      </div>
    </aside>
    <div class="chat-box col col-7">
      <section>
        <header class="chat-header">
          <img class="user-avatar" src="@/../public/user-img/test2.jpg" alt="" />
          <div class="text-wrapper">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </header>
        <div class="chat-messages">
          <div class="chat incoming">
            <div class="details">
              <p>hello there</p>
            </div>
          </div>
          <div class="chat outgoing">
            <p>hello here</p>
          </div>
        </div>
      </section>
    </div>
    <div class="col col-2 suggestions">
      <section class="">
        <h4>Suggestions</h4>
      </section>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: $light-card-shadow;
  height: 550px;
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
  height: 440px;
  overflow-y: auto;
  margin: 10px 0 15px 0;
  padding-left: 10px;

  h4: {
    color: $main-text-color;
  }

  .chat-button {
    background-color: white;
    margin-bottom: 10px;
    width: 100%;
    border: none;
    transition: 0.3s;

    &:hover {
      background-color: rgb(184, 184, 184);
    }
  }
}

.chat-button {
  box-shadow: $light-card-shadow;
  border-radius: 5px;
  list-style-type: none;
  height: 45px;
}

.chat-box {
  background-color: white;
  border-radius: 10px;
  padding: 0;
}

.chat-messages {
  padding: 15px 20px;

  p {
    word-wrap: break-word;
  }

  .chat.incoming {
    display: flex;
    .details {
      margin-right: auto;
      overflow: auto;
      max-width: calc(100% - 200px);
    }

    p {
      border-radius: 0 10px 10px 10px;
      padding: 5px 13px;
      background-color: $main-cyan;
      color: #fff;
      margin: 0;
    }
  }
}

.chat-header {
  display: flex;
  padding-top: 15px;
  padding-left: 15px;
  align-items: center;
  padding-bottom: 10px;
  // background-color: rgb(237, 237, 237);
  // border-top-left-radius: 10px; 
  // border-top-right-radius: 10px; 
  // box-shadow: $light-card-shadow;
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
    }
  }
}

.suggestions {
  padding-top: 20px;

  h4 {
    text-align: center;
  }
}</style>
