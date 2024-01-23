<template>
    <button v-if="searchCriteriaCopy" v-for="(field, index) in searchCriteriaCopy.fields">
        {{ field }}
    </button>
    <button v-if="searchCriteriaCopy" v-for="(skill, index) in searchCriteriaCopy.skills">
        {{ skill }}
    </button>
    <button v-if="searchCriteriaCopy">
        {{ searchCriteriaCopy.location }}
    </button>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps, computed } from "vue";
const props = defineProps({
    searchCriteria: {
        type: Object,
        required: false,
    },
})
const searchCriteriaCopy = computed(() => {
    return { ...props.searchCriteria }
})
</script>
<style lang="scss" scoped>
button {
    background-color: $main-button-color;
    border-radius: 20px;
    color: white;
    padding: 4px 15px;
    border: none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.875rem;
    transition: .3s;

    &:hover {
        background-color: lighten($main-button-color, 5%);
    }
}
</style>