<template>
    <div class="container mt-lg-5 mt-5">
        <div class="row px-xl-0 px-md-3 px-1">
            <side-bar v-show="showSidebar" class="col col-lg-3" :fieldData="fields" :skills="skills" :rating="rating"
                :hourlyRateData="hourlyRate"></side-bar>
            <search-result class="col col-12 col-lg-9 px-2 px-lg-0" @toggleSidebar="sidebarToggle"></search-result>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted, nextTick, computed } from "vue";
import SideBar from "@/components/layout/sidebar/SideBar.vue";
import SidebarMobile from "@/components/layout/sidebar/SidebarMobile.vue";
import SearchResult from "@/components/search-results/SearchResult.vue";
import skillData from "@/data/skills.json";
import fieldsData from "@/data/fields.json";
import ratingData from "@/data/rating.json";
import hourlyRateData from "@/data/hourlyRate.json";
import { handleResize } from "@/utils/resize.js";

const fields = reactive(fieldsData);
const skills = reactive(skillData);
const rating = reactive(ratingData);
const hourlyRate = reactive(hourlyRateData);
const showSidebar = ref(true);
const showMobileSidebar = ref(false);
const showToggleBtn = ref(false);
const mobileBreakpoint = ref(991);

const adaptWidth = () => {
    const isMobile = window.innerWidth <= mobileBreakpoint.value; // check width when mounting
    showSidebar.value = !isMobile;
    showToggleBtn.value = isMobile;
    showMobileSidebar.value = !isMobile;
};

onMounted(() => {
    adaptWidth();
    window.addEventListener("resize", () => {
        const isMobile = window.innerWidth <= mobileBreakpoint.value
        showSidebar.value = !isMobile || (showMobileSidebar.value && isMobile);
        showMobileSidebar.value = isMobile && showMobileSidebar.value;
    });



    //   checkWidth();
    //   window.addEventListener("resize", () => {
    //     const isMobile = window.innerWidth < 992;
    //     const shouldShowMobileSidebar = showMobileSidebar.value;
    //     showToggleBtn.value = isMobile;
    //     showMobileSidebar.value = isMobile;
    //     showSidebar.value = !isMobile || (isMobile && shouldShowMobileSidebar);
    //   });
});

const sidebarToggle = () => {
    showMobileSidebar.value = !showMobileSidebar.value;
    showSidebar.value = !showSidebar.value;
};
</script>
<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
</style>
