<template>
    <transition name="slide">
        <aside v-show="props.show" class="chat-list col col-xl-3">
            <div class="title-button-container">
                <button class="toggle-mobile-chat-list" @click="toggleChatList">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>

                <h4 class="title">Chats</h4>
            </div>

            <div class="search-container">
                <input v-model.trim="searchTerm" type="text" placeholder="Search user" class="search-input" />
                <button v-if="searchTerm !== ''" @click="clearSearchTerm" class="clear-input-button"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="chat-buttons-container" v-if="chatList">
                <button v-for="(chat, index) in chatList" :key="chat.userData.userImage" class="chat-button" :class="{ active: route.params.id == chat.userData.userId }"
                    @click="switchUser(chat.userData.userId)">
                    <img :src="chat.userData.userImage" class="chat-button-img" alt="">
                    <div class="user-info">
                        <h3>{{ chat.userData.firstName }} {{ chat.userData.lastName }}</h3>
                        <h4> <span v-if="userId == chat.latestMessage.senderId">You :</span> {{
            chat.latestMessage.content }}</h4>
                    </div>
                </button>
            </div>
        </aside>
    </transition>
</template>
<script setup lang="ts">
import { Ref, ref, reactive, onMounted, watch, onUnmounted, computed, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const store = useStore();
const props = defineProps({
    show: Boolean
});

const searchTerm = ref("");
const userId = ref(localStorage.getItem("userId"));
const emits = defineEmits(["toggle-chat-list"]);
const toggleChatList = (): void => {
    emits("toggle-chat-list");
};

const switchUser = (userId: string) => {
    router.push(`/chat/${userId}`)
};

const chatList = computed(() => {
    if (searchTerm.value === "") {
        return store.getters["chat/getChatList"];
    }
    const usersData = store.getters["chat/getChatList"];
    return usersData.filter((user: Object) => {
        return user.userData.firstName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            user.userData.lastName.toLowerCase().includes(searchTerm.value.toLowerCase());
    });
});

const getChatList = async () => {
    await store.dispatch("chat/listenToMostRecentMessage", userId.value);
};

const clearSearchTerm = () => {
    searchTerm.value = "";
};  

onMounted(async () => {
    await getChatList();
});

onUnmounted(() => {
    store.state.chat.mostRecentMessageRef();
});

</script>
<style lang="scss" scoped>
.chat-list {
    .toggle-mobile-chat-list {
        display: none;
        border: none;
        background: none;
    }

    padding-left: 20px;
    padding-top: 20px;
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;

    .title-button-container {
        display: flex;
        margin-bottom: 10px;
    }
}

.search-container {
    position: relative;
    .clear-input-button {
        position: absolute;
        right: 8px;
        top: 0; 
        border: none;
        background: none;
    }
}

.search-input {
    width: 95%;
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
    margin-bottom: 0;
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
    height: 55px;
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

.chat-button.active {
    background-color: rgb(208, 208, 208);
    h3, h4 {
        color: rgb(36, 36, 36);
    }
}

@media (max-width: 1200px) {
    .chat-list {
        left: 0;
        top: 0;
        background-color: #F6F9FC;
        width: 25%;
        min-width: 300px;
        height: 100%;
        position: absolute;
        z-index: 20;

        .toggle-mobile-chat-list {
            display: inline;
        }
    }
}


// ------- animation ------


.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
}
</style>