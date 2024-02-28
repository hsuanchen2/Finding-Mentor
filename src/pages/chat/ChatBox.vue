<template>
  <section class="wrapper row">
    <aside class="chat-list col col-4">
      <h4>Chats</h4>
      <input type="text" placeholder="search user" />
      <div class="chat-buttons-container">
        <button class="chat-button"></button>
        <button class="chat-button"></button>
        <button class="chat-button"></button>
        <button class="chat-button"></button>
        <button class="chat-button"></button>
        <button class="chat-button"></button>
        <button class="chat-button"></button>
        <button class="chat-button"></button>
        <button class="chat-button"></button>
      </div>
    </aside>
    <div class="chat-box col col-8">
      <section>
        <header class="chat-header">
          <img
            class="user-avatar"
            src="@/../public/user-img/test2.jpg"
            alt=""
          />
          <h3>Patrick Shyu</h3>
          <h4>ex Google ex Facebook tech lead</h4>
        </header>
      </section>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.wrapper {
  max-width: 1000px;
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: $light-card-shadow;
  height: 480px;
}

.chat-buttons-container {
  padding-top: 10px;
  padding-right: 5px;
  height: 380px;
  overflow-y: scroll;
  margin: 15px 0 15px 0;
  padding-left: 10px;
  h4: {
    color: $main-text-color;
  }
  .chat-button {
    background-color: white;
    width: 100%;
    border: none;
    background: none;
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
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 100%;
}

.chat-header {
  display: flex;
  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
