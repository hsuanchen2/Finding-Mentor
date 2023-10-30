<template>
        <div class="genre-card" v-for="image in imageData" v-show="image.show">
            <img :src="image.imgUrl" :alt="image.alt" />
            <h3>{{ image.copy }}</h3>
        </div>
</template>

<script setup>
import { ref, reactive, defineProps, computed } from "vue";
const props = defineProps(["imageData"]);
console.log(props); 
</script>
<style scoped lang="scss">
.genre-card {
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: 0.4s ease;
    padding: 0;
    position: relative;
    box-sizing: border-box;

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
