<template>
    <button @click="scrollToTop" v-if="showBtn"><i class="fa-solid fa-circle-arrow-up"
            style="color: #1866ec;"></i></button>
</template>
<script setup>
    import { ref, computed, onMounted } from "vue";
    // const showButton = ref(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const showBtn = computed(() => {
        return window.scrollY > 100;
    })

</script>
<style scoped lang="scss">
    button {
        position: fixed;
        bottom: 3rem;
        right: 3rem;
    }
</style>