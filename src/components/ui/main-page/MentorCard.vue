<template>
    <article>
        <img :src="props.userImage" alt="">
        <h3 class="mentor-name">{{ user.firstName }} {{ user.lastName }}</h3>
        <i>
            <h2>{{ user.jobTitle }}</h2>
        </i>
        <p class="user-desc">{{ user.desc }}</p>
        <figure>
            <p>From ${{ user.rate }}</p>
            <p>&#x2B50 {{ user.jobRating }}</p>
        </figure>
        <footer>
            <base-button link class="card-button" :to="contactLink">Contact Me</base-button>
            <base-button link class="card-button" :to="aboutLink">Details</base-button>
        </footer>
    </article>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps, onBeforeMount, onMounted, computed } from "vue";
import { useStore } from "vuex";

import BaseButton from "@/components/ui/BaseButton.vue";
const props = defineProps(["userId", "jobTitle", "firstName", "lastName", "desc", "rate", "jobRating", "userImage"]);

const user = reactive({
    userId: props.userId,
    jobTitle: props.jobTitle,
    firstName: props.firstName,
    lastName: props.lastName,
    desc: props.desc,
    rate: props.rate,
    userImage: props.userImage,
    jobRating: props.jobRating,
});

const contactLink = computed(() => {
    return `/coaches/${user.userId}/contact`;
});

const aboutLink = computed(() => {
    return `/coaches/${user.userId}`;
});
</script>
<style scoped lang="scss">
article {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 260px;
    box-shadow: $light-card-shadow;
    border-radius: 10px;
    padding: 15px 20px;
    height: 400px;
    background-color: #fff;
    position: relative;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 7px;
        top: 0;
        border-radius: 10px 10px 0 0;
        background-color: $main-cyan;
    }

    img {
        width: 70px;
        height: 70px;
        margin-bottom: 15px;
        margin-top: 7px;
        border-radius: 50%;
        object-fit: cover;
    }

    h3 {
        color: $main-text-color;
        font-size: 1.5rem;
        text-align: center;
    }

    h2 {
        font-size: 1rem;
        text-align: center;
    }

    p {
        font-size: 0.9rem;
        text-align: center;
    }

    .user-desc {
        max-height: 100px;
        overflow-y: auto !important;
        // overflow-x: hidden;
    }

    h2,
    p {
        color: $minor-text-color;
    }

    figure {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px
    }

    footer {
        width: 90%;
        display: flex;
        justify-content: space-around;

        .card-button {
            font-size: 14px;
        }
    }
}
</style>