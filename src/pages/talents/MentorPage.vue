<template>
    <div class="container">
        <div class="row px-xl-0 px-1">
            <side-bar class="col col-lg-3" :fieldData="fields" :skills="skills" :rating="rating"
                :hourlyRateData="hourlyRate" :showSidebarToggle="showSidebarToggle"></side-bar>
            <search-result class="col col-12 col-lg-9 px-2 px-lg-0" :showSidebarToggle="showSidebarToggle"></search-result>
        </div>
    </div>
    <!-- 感覺要多做一個modal -->
</template>
<script setup>
import { ref, reactive, onMounted, nextTick } from "vue";
import SideBar from "@/components/layout/sidebar/SideBar.vue";
import SearchResult from "@/components/search-results/SearchResult.vue";
import skillData from "@/data/skills.json";
import fieldsData from "@/data/fields.json";
import ratingData from "@/data/rating.json";
import hourlyRateData from "@/data/hourlyRate.json";
import { handleResize } from "@/utils/resize.js";

const fields = reactive(fieldsData);
const skills = reactive(skillData);
const rating = reactive(ratingData)
const hourlyRate = reactive(hourlyRateData);

const showSidebarToggle = ref(false);

onMounted(() => {
    nextTick(() => {
        showSidebarToggle.value = 992 > window.innerWidth;
        window.addEventListener("resize", () => {
            handleResize(992, showSidebarToggle)
        });
    })
});

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