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
          <img
            class="user-avatar"
            src="@/../public/user-img/test2.jpg"
            alt=""
          />
          <div class="text-wrapper">
            <h3>Patrick Shyu</h3>
            <h4>ex Google ex Facebook tech lead</h4>
          </div>
        </header>
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
  height: 100%;
  padding-top: 20px;
  border-radius: 10px;
  // box-shadow: inset 5px 5px 12px 0px rgba(224,224,224,1);
}

.chat-header {
  display: flex;
  padding-left: 20px;
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  .text-wrapper {
    padding-left: 10px;
    h3 {
      font-size: 18px;
      margin-bottom: 0;
    }
    h4 {
      font-size: 14px;
      font-weight: 400;
      font-style: italic;
    }
  }
}
.suggestions {
  padding-top: 20px;
}
</style>
