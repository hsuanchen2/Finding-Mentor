<template>
    <button v-if="searchCriteria" v-for="(field, index) in searchCriteria.fields">
        {{ field }}
    </button>
    <button v-if="searchCriteria" v-for="(skill, index) in searchCriteria.skills">
        {{ skill }}
    </button>
    <button v-if="searchCriteria">
        Location : {{ searchCriteria.location }}
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