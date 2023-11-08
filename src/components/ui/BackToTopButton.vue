<template>
    <button @click="scrollToTop" v-if="showBtn"><i class="fa-solid fa-circle-arrow-up"
            style="color: #1866ec;"></i></button>
</template>
<script setup>
    import { ref, computed, onMounted, onBeforeMount } from "vue";
    const showBtn = ref(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    
    onBeforeMount(() => {
        window.addEventListener("scroll", handleScroll);
    })

    const handleScroll = () => {
        showBtn.value = window.pageYOffset > 1500;
    }

</script>
<style scoped lang="scss">
    button {
        position: fixed;
        bottom: 3rem;
        right: 3rem;
        border: none;
        background: none;
        i {
            font-size: 35px;
        }
    }
</style>