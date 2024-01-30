<template>
    <transition name="fade">
        <div v-if="props.showCart" class="cart">
            <h3>Favorites</h3>
            <button class="close-cart" @click="toggleCart"><i class="fa-solid fa-x"></i></button>
            <ul>
                <cart-item v-for="(mentor, index) in cartItems" :userId="mentor.userId" :userImage="mentor.userImage"
                    :key="index" :firstName="mentor.firstName" :lastName="mentor.lastName" :jobTitle="mentor.jobTitle"
                    :jobRating="mentor.jobRating" :jobsDone="mentor.jobsDone" @removeCartItem="removeCartItem" />
            </ul>
            <div v-if="isCartEmpty" class="empty-cart">
                <p>Your favorite list is empty.</p>
                <p>Not sure where to start?</p>
                <img class="empty-cart-img" src="@/../public/user-img/empty-cart.png" alt="">
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { Ref, ref, reactive, computed, defineEmits, watch } from "vue";
import { useStore } from "vuex";
import cartItem from "./CartItem.vue"
const store = useStore();
const emits = defineEmits(["toggleCart"]);
const cartItems: Ref<object[] | null> = ref(null);
const props = defineProps({
    showCart: {
        type: Boolean,
        required: true
    },
})
const isCartEmpty = computed(() => {
    return store.getters["cart/getCartItems"].length === 0;
})
const getCartItemsFromLocalStorage = () => {
    store.dispatch("cart/getCartItemsFromLocalStorage");
    cartItems.value = store.getters["cart/getCartItems"];
    // console.log(cartItems.value);
};

const toggleCart = () => {
    emits("toggleCart");
}

const removeCartItem = (userId: string) => {
    // console.log(userId);
    store.dispatch("cart/deleteCartItemFromLocalStorage", userId);
}

watch(() => store.getters["cart/getCartItems"], (newCartItems) => {
    cartItems.value = newCartItems;
});
const contactLink = computed(() => {
    return `/coaches/${props}/contact`;
})

getCartItemsFromLocalStorage();
</script>

<style scoped lang="scss">
.cart {
    position: relative;

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
    max-width: 480px;
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
            font-size: 1.125rem;
            color: $main-text-color;
            font-weight: 400;
            margin-bottom: 3px;
        }

        p {
            margin-bottom: 0;
            font-size: 1rem;
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

    .card-button {
        margin-left: 5px;
        border: none;
        background: none;

        a {
            text-decoration: none;
            color: white;
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

    .close-cart {
        border: none;
        background: none;
        position: absolute;
        top: 30px;
        right: 20px;

        i {
            font-size: 14px;
            color: $miner-text-color;
        }
    }

    .empty-cart {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            font-size: 20px;
        }

        img {
            width: 80%;
            margin-top: auto;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
}

@media (max-width:452px) {
    .cart {
        width: 100vw;
        box-sizing: border-box;
        height: 100vh;
    }
}
</style>
