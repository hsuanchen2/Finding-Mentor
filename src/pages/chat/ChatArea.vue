<template>
    <!-- <button @click="fetchMessages">test</button> -->
    <div class="chat-box col col-xl-6 col-md-8">
        <section>
            <header class="chat-header">
                <button class="chat-list-toggle" @click="toggleChatList">
                    <i class="fa-solid fa-sliders"></i>
                </button>
                <img class="user-avatar" :src="props.userImg" alt="" />
                <div class="text-wrapper">
                    <h3>{{ props.firstName }} {{ props.lastName }}</h3>
                    <h4>{{ props.jobTitle }}</h4>
                </div>
                <button class="contact-info-toggle" @click="toggleContactInfo">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </header>
            <div class="chat-area">
                <div v-for="message in messageHistory" :key="message.id" class="chat"
                    :class="{ 'incoming': props.receiverId === userId, 'outgoing': receiverId !== userId }">
                    <img :src="props.userImg" alt="">
                    <div class="details">
                        <p> {{ message.content }}</p>
                        <div class="time-stamp">
                            <span>{{ message.timeStamp }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <form class="text-input-form" @submit.prevent="sendMessage">
                <input v-model="message.content" class="input-area" type="text" placeholder="Type a message" />
                <button type="submit" class="submit-button"><i class="fa-regular fa-paper-plane"></i></button>
            </form>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useStore();
import { Ref, ref, reactive, onMounted } from "vue";

const messageHistory = computed(() => {
    return store.getters["chat/messages"];
});

const fetchMessages = () => {
    console.log(store.getters["chat/messages"])
}

const userId = ref("");
userId.value = localStorage.getItem("userId");

const emits = defineEmits(["toggle-chat-list", "toggle-contact-info"]);
const props = defineProps({
    hideChatList: {
        type: Boolean,
        required: false,
    },
    receiverId: {
        type: String,
        required: false,
    },
    userImg: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    }
})

// 傳訊息是否需要註冊帳號
const message = reactive({
    content: "",
    receiverId: route.params.id,
    senderId: localStorage.getItem("userId"),
});
const toggleChatList = (): void => {
    emits("toggle-chat-list");
}

const toggleContactInfo = (): void => {
    emits("toggle-contact-info");
}

const sendMessage = (): void => {
    if (message.content.trim() === "") return;
    store.dispatch("chat/sendMessage", message);
    console.log(message);
    message.content = "";
    console.log(props.receiverId);
    console.log(localStorage.getItem("userId"));
}

</script>

<style scoped lang="scss">
.chat-box {
    background-color: white;
    border-radius: 10px;
    padding: 0;
}

.chat-header {
    display: flex;
    padding: 15px 0 10px 15px;
    align-items: center;
    border-bottom: 1px solid lightgray;

    .user-avatar {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: $light-card-shadow;
    }

    .text-wrapper {
        margin-left: 10px;

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

    .chat-list-toggle {
        border: none;
        background: none;
        margin-right: 15px;
        display: none;

        i {
            font-size: 20px;
            color: $minor-text-color;
        }
    }

    .contact-info-toggle {
        margin-left: auto;
        margin-right: 18px;
        border: none;
        background: none;
        display: none;

        i {
            color: $minor-text-color;
            font-size: 22px;
        }
    }
}

.chat-area {
    padding: 15px 20px;
    height: 450px;
    overflow: auto;

    .chat {
        margin-bottom: 15px;
        display: flex;

        img {
            width: 35px;
            height: 35px;
            margin-right: 15px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: $light-card-shadow;
        }

        // .details {
        //     overflow: auto;
        //     min-width: 200px;
        //     max-width: calc(100% - 200px);
        // }

        p {
            padding: 5px 13px;
            margin: 0;
            color: #fff;
            word-wrap: break-word;
        }

        .time-stamp {
            font-size: 12px;
            color: $minor-text-color;
            font-style: italic;
            padding-top: 3px;
        }
    }

    .incoming {
        .details {
            margin-right: auto;
        }

        p {
            background-color: $main-purple;
            border-radius: 0 18px 18px 18px;
        }
    }

    .outgoing {
        .details {
            margin-left: auto;
        }

        p {
            background-color: $main-cyan;
            border-radius: 18px 0 18px 18px;
        }

        .time-stamp {
            display: flex;
            justify-content: end;
        }
    }
}

.text-input-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid lightgray;
    padding: 10px 20px;

    .input-area {
        height: 40px;
        width: calc(100% - 58px);
        padding: 0px 13px;
        border: 1px solid rgb(204, 204, 204);
        border-radius: 5px;
        outline: none;
    }

    .submit-button {
        width: 55px;
        height: 40px;
        font-size: 19px;
        margin-left: 10px;
        color: rgb(255, 255, 255);
        background-color: $main-button-color;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: .3s;

        &:hover {
            background-color: lighten($main-button-color, 10%);
        }
    }
}

@media screen and (max-width: 1200px) {
    .chat-header {
        .chat-list-toggle {
            display: block;
        }
    }
}


@media screen and (max-width: 768px) {
    .chat-header {
        .contact-info-toggle {
            display: block;
        }
    }

    .details {
        overflow: auto;
        // min-width: 200px;
        max-width: calc(100% - 200px);
    }
}
</style>
