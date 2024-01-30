<template>
    <li>
        <img class="cart-user-img" :src="props.userImage" alt="">
        <div class="text-wrapper">
            <h4>{{ props.firstName }} {{ props.lastName }}</h4>
            <p>{{ props.jobTitle }}</p>
            <p>&#x2B50 {{ props.jobRating }} ({{ props.jobsDone }})</p>
        </div>
        <div class="btn-group">
            <button class="card-button"><router-link :to="contactLink">Contact</router-link></button>
            <button class="remove-cart-item" @click="removeCartItem"><i class="fa-regular fa-trash-can"></i></button>
        </div>
    </li>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
const props = defineProps({
    userId: String,
    userImage: String,
    firstName: String,
    lastName: String,
    jobTitle: String,
    rating: Number,
    jobsDone: Number,
    jobRating: Number,
})
const contactLink = computed((): string => {
    return `/coaches/${props.userId}/contact`;
})
const emits = defineEmits(["removeCartItem"]);

const removeCartItem = (): void => {
    emits("removeCartItem", props.userId);
}
</script>
<style scoped lang="scss">
.cart {
    h3 {
        text-align: center;
        color: $main-text-color;
        font-size: 22px;
    }

    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    border: 1px solid lightgray;
    height: 100vh;
    width: 33%;
    padding: 20px 20px;

    ul {
        padding-left: 20px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    li {
        list-style: none;
        display: flex;
        gap: 25px;
        align-items: center;
        border-bottom: 1px solid lightgray;
        padding-bottom: 15px;

        h4 {
            font-size: 18px;
            color: $main-text-color;
            font-weight: 400;
            margin-bottom: 3px;
        }

        p {
            margin-bottom: 0;
            font-size: 16px;
            color: $miner-text-color;
        }

        img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
        }

        .text-wrapper {
            display: flex;
            flex-direction: column;
            align-items: start;
        }
    }

    .remove-cart-item {
        border: none;
        background: none;
        margin-left: auto;
    }

    .btn-group {
        margin-left: auto;
        display: flex;
        gap: 25px;
    }

    .card-button {
        border: 1px solid $main-purple;
        border-radius: 15px;
        padding: 5px 10px;
        background-color: white;
        transition: .2s;

        &:hover {
            background-color: $main-purple;
        }

        a {
            text-decoration: none;
            transition: .2s;
            color: $miner-text-color;

            &:hover {
                color: white;
            }
        }
    }

    .remove-cart-item {
        i {
            color: $main-purple;
            transition: .3s;
            font-size: 20px;

            &:hover {
                color: lighten($main-purple, 10%);
            }
        }
    }
}

@media (max-width:452px) {
    .cart {
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px !important;

            .btn-group {
                margin-left: 0;
            }
        }
    }

}
</style>