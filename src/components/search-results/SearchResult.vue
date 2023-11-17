<template>
    <section class="search-result">
        <h3>Search results</h3>

        <div class="search-tags">
            <search-tag>Front-End</search-tag>
            <search-tag>Back-End</search-tag>
            <search-tag>Full-Stack</search-tag>
        </div>
        <div class="user-card-container">
            <user-card></user-card>
            <user-card></user-card>
            <user-card></user-card>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive, defineProps } from "vue";
import SearchTag from "@/components/ui/SearchTag.vue";
import UserCard from "@/components/search-results/UserCard.vue";

</script>
<style lang="scss" scoped>
.search-result {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    gap: 10px;
    h3 {
        color: $main-text-color;
        font-weight: 700;
        font-size: 1.4rem;
    }

    .search-tags {
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 25px;
    }

    .user-card-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
}
</style>