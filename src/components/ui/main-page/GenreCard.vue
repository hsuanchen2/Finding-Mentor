<template>
    <div class="genre-card">
        <img :src="props.src" :alt="props.alt" />
        <h3>{{ props.copy }}</h3>
    </div>
</template>

<script setup>
import { ref, reactive, defineProps, computed } from "vue";
const props = defineProps(["show", "src", "copy", "alt", "index"]);
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