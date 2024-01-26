<template>
    <!-- <transition name="fade" mode="out-in"> -->
    <div class="genre-card" v-show="props.show" :key="props.copy">
        <img :src="props.src" :alt="props.alt" />
        <h3>{{ props.copy }}</h3>
    </div>
    <!-- </transition> -->
    <!-- <div class="genre-card" v-for="image in imageData" v-show="image.show">
        <img :src="image.imgUrl" :alt="image.alt" />
        <h3>{{ image.copy }}</h3>
    </div> -->
</template>

<script setup>
import { ref, reactive, defineProps, computed } from "vue";
const props = defineProps(["show", "src", "copy", "alt", "index"]);
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity .1s !important;
    transform: translateX(0) !important;
}

.fade-enter,
.fade-leave-to {
    transform: translateX(0) !important;
    opacity: 1;
}

.genre-card {
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: 0.4s ease;
    padding: 0;
    position: relative;
    box-sizing: border-box;
    transition: 0.3s ease;

    img {
        width: 90%;
        box-shadow: $light-card-shadow;
        border-radius: 10px;
    }

    h3 {
        position: absolute;
        color: white;
        bottom: 5%;
        left: 10%;
        width: 70%;
    }
}
</style>