<template>
    <article>
        <img src="@/../public/user-img/test.png" alt="">
        <h3 class="mentor-name">{{ user.userName }}</h3>
        <h2>{{ user.jobTitle }}</h2>
        <p>{{ user.desc }}</p>
        <figure>
            <p>From ${{ user.rate }}</p>
            <p>&#x2B50 {{ user.jobRating }}</p>
        </figure>
        <footer>
            <base-button link>Contac Me</base-button>
            <base-button>Details</base-button>
        </footer>
    </article>
</template>
<script setup>
import { ref, reactive, defineProps } from "vue";
import BaseButton from "@/components/ui/BaseButton.vue";
const props = defineProps(["userId", "jobTitle", "userName", "desc", "rate", "jobRating"]);
const user = reactive({
    userId: props.userId,
    jobTitle: props.jobTitle,
    userName: props.userName,
    desc: props.desc,
    rate: props.rate,
    jobRating: props.jobRating,
})

</script>
<style scoped lang="scss">
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 260px;
    box-shadow: $light-card-shadow;
    border-radius: 10px;
    padding: 10px 20px;
    height: 350px;
    img {
        width: 35%;
        margin-bottom: 15px;
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

    h2,
    p {
        color: $miner-text-color;
    }

    figure {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px
    }

    footer {
        display: flex;
    }
}
</style>