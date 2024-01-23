<template>
    <div class="container mt-lg-5 mt-5">
        <div class="row px-xl-0 px-md-3 px-1">
            <keep-alive>
                <side-bar v-if="showSidebar" class="col col-md-3" :fieldData="fields" :skills="skills" :rating="rating"
                    :hourlyRateData="hourlyRate" :showBackdrop="showBackdrop" @toggleSidebar="sidebarToggle"
                    @isLoading="toggleLoading" @updateLoading="isLoading" @searchMentors="searchMentor"></side-bar>
            </keep-alive>
            <search-result class="col col-12 col-md-9 px-2 px-lg-0" @toggleSidebar="sidebarToggle"
                @loadMore="loadMoreMentors" :isLoading="isLoading" :showSidebarToggle="showSidebar"
                :searchResult="searchResult" :resultLength="resultLength" :isLoadMoreLoading="isLoadMoreLoading"
                :searchCriteria="searchCriteria"></search-result>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Ref, ref, reactive, onMounted, onBeforeUnmount, computed, watch } from "vue";
import { useStore } from "vuex";

import SideBar from "@/components/layout/sidebar/SideBar.vue";
import SearchResult from "@/components/search-results/SearchResult.vue";
import skillData from "@/data/skills.json";
import fieldsData from "@/data/fields.json";
import ratingData from "@/data/rating.json";
import hourlyRateData from "@/data/hourlyRate.json";
const store = useStore();
const isLoading = ref(false);
const isLoadMoreLoading = ref(false);
const fields = reactive(fieldsData);
const skills = reactive(skillData);
const rating = reactive(ratingData);
const hourlyRate = reactive(hourlyRateData);
const showSidebar = ref(true);
const showMobileSidebar = ref(false);
const mobileBreakpoint = ref(767);
const showBackdrop = ref(null);
const searchCriteria = ref(null);
// const cloneSearchCriteria = computed(() => ({ ...searchCriteria.value }));

interface Mentor {
    id: string;
    aboutMe: string;
    experience: string;
    firstName: string;
    lastName: string;
    description: string;
    hourlyRate: number;
    skills: string[];
    fields: string[];
    jobRating: number;
    jobsDone: number;
    userImage: string;
    location: string;
    jobTitle: string;
}
const searchResult: Ref<Mentor[]> = ref([]);
const resultLength = ref(0);
// const searchCriteria = computed(() => {
//     return store.getters["coaches/getSearchCriteria"];
// })
const loadDefaultMentors = async () => {
    try {
        isLoading.value = true;
        await store.dispatch("coaches/loadDefaultMentors");
    } catch (error) {
        console.log(error);
    }
    searchResult.value = await store.getters["coaches/getSearchResult"];
    resultLength.value = await store.getters["coaches/getTotalCount"];
    isLoading.value = false;
    console.log(searchResult.value);
}

const loadMoreMentors = async () => {
    try {
        isLoadMoreLoading.value = true;
        await store.dispatch("coaches/loadMoreMentors");
    } catch (error) {
        console.log(error);
    }
    searchResult.value = await store.getters["coaches/getSearchResult"];
    resultLength.value = await store.getters["coaches/getTotalCount"];
    isLoadMoreLoading.value = false;

};

loadDefaultMentors();

const searchMentor = async (searchFormData: object) => {
    console.log("test");
    isLoading.value = true;
    try {
        await store.dispatch("coaches/searchMentors", searchFormData);
    } catch (error) {
        console.log(error);
    }
    showBackdrop.value && sidebarToggle();
    searchResult.value = await store.getters["coaches/getSearchResult"];
    isLoading.value = false;
    searchCriteria.value = store.getters["coaches/getSearchCriteria"];
    console.log(searchCriteria.value);
}


const adaptWidth = () => {
    const isMobile = window.innerWidth <= mobileBreakpoint.value; // check width when mounting
    showBackdrop.value = isMobile;
    showSidebar.value = !isMobile;
    showMobileSidebar.value = !isMobile;
};

const handleResize = () => {
    const isMobile = window.innerWidth <= mobileBreakpoint.value
    showBackdrop.value = isMobile;
    showSidebar.value = !isMobile || (showMobileSidebar.value && isMobile);
    showMobileSidebar.value = isMobile && showMobileSidebar.value;
    document.body.style.overflow = isMobile && showMobileSidebar.value ? "hidden" : "auto";
};

const toggleLoading = () => {
    console.log("123");
    isLoading.value = !isLoading.value;
}

onMounted(() => {
    adaptWidth();
    window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
})

const sidebarToggle = () => {
    showMobileSidebar.value = !showMobileSidebar.value;
    showSidebar.value = !showSidebar.value;
    document.body.style.overflow = showMobileSidebar.value ? "hidden" : "auto";
};
</script>
<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

// .slide-enter-active {
//     transition: .3s;
//     transform: translateX(0);
//     z-index: 60;
//     position: fixed;
//     top: 0;
// }

// .slide-leave-active {
//     z-index: 60;
//     position: fixed;
//     top: 0;
// }

// .slide-enter-from,
// .slide-leave-to {
//     transform: translateX(-100%);
//     position: fixed;
//     top: 0;
//     z-index: 60;
// }
</style>
