<template>
    <div class="backdrop" v-if="props.showSidebarDialog">
        <header>
            <h3>Filter</h3>
            <button class="close-dialog" @click="closeModal"><i class="fa-solid fa-xmark"></i></button>
        </header>
    </div>
</template>
<script setup>
import { ref, reactive, defineProps, defineEmits } from "vue";
const props = defineProps({
    showSidebarDialog: Boolean
});
const emits = defineEmits(["close"]);
const closeModal = () => {
    emits("close");
}
</script>
<style lang="scss" scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 100;

    header {
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: $minor-text-color;
    }
}
</style>