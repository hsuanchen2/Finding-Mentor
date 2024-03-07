<template>
    <div class="chat-box col col-xl-6 col-md-8">
        <section>
            <header class="chat-header">
                <button class="chat-list-toggle" @click="toggleChatList">
                    <i class="fa-solid fa-sliders"></i>
                </button>
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
</template>

<script lang="ts" setup>
const emits = defineEmits(["toggle-chat-list"]);
const props = defineProps({
    hideChatList: {
        type: Boolean,
        required: false,
    }
})

const toggleChatList = (): void => {
    emits("toggle-chat-list");
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

        .details {
            overflow: auto;
            min-width: 200px;
            max-width: calc(100% - 200px);
        }

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
</style>
