<template>
    <section class="search-result">
        <div class="text-wrapper">
            <h3>Search results</h3>
            <p>25 matched results were found</p>

            <div class="search-tags">
                <search-tag :tagName="searchedTags.tag1"></search-tag>
                <search-tag :tagName="searchedTags.tag2"></search-tag>
                <search-tag :tagName="searchedTags.tag3"></search-tag>
                <span class="clear-filter">Clear filters</span>
            </div>
        </div>
        <div class="user-card-container">
            <user-card></user-card>
            <user-card></user-card>
            <user-card></user-card>
            <user-card></user-card>
            <user-card></user-card>
            <user-card></user-card>
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
const searchedTags = reactive({
    tag1: "Front-End",
    tag2: "Back-End",
    tag3: "Full-Stack",
})
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
        padding-bottom: 10px;
        align-items: center;

        .clear-filter {
            color: $main-text-color;
            cursor: pointer;
            transition: .3s;

            &:hover {
                border-bottom: 1px solid $miner-text-color;
            }
        }
    }

    .user-card-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 10px;
    }

    .text-wrapper {
        // border-radius: 10px;
        // box-shadow: $light-card-shadow;
        border-bottom: 2px solid lightgray;

        p {
            color: $miner-text-color;
        }
    }
}
</style>