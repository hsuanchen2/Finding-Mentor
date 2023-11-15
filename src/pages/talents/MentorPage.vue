<template>
    <div class="container">
        <div class="row">
            <side-bar class="col col-3" :fieldData="fields" :skills="skills" :rating="rating"
                :hourlyRateData="hourlyRate"></side-bar>
            <search-result class="col col-9"></search-result>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import SideBar from "@/components/layout/sidebar/SideBar.vue";
import SearchResult from "@/components/search-results/SearchResult.vue";
import skillData from "@/data/skills.json";
import fieldsData from "@/data/fields.json";
import ratingData from "@/data/rating.json";
import hourlyRateData from "@/data/hourlyRate.json";


const fields = reactive(fieldsData);
const skills = reactive(skillData);
const rating = reactive(ratingData)
const hourlyRate = reactive(hourlyRateData);
</script>
<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 100px auto;
    .row {
        // align-items: start;
    }
}
</style>