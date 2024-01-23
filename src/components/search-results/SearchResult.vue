<template>
    <section class="search-result">
        <div class="text-wrapper">
            <h3>Search results</h3>
            <p>{{ searchResult.length }} matched results were found</p>
            <span @click="toggleSidebar">
                <button class="search-bar-toggle hidden"><i class="fa-solid fa-sliders"
                        style="color: #635bff;"></i></button></span>
            <div class="search-tags">
                <search-tag :tagName="searchedTags.tag1"></search-tag>
                <search-tag :tagName="searchedTags.tag2"></search-tag>
                <search-tag :tagName="searchedTags.tag3"></search-tag>
                <span class="clear-filter">Clear filters</span>
            </div>
        </div>
        <div class="user-card-container">
            <base-spinner v-if="isLoading || props.isLoadingg"></base-spinner>
            <user-card v-for="result in searchResult" :id="result.id" :firstName="result.firstName"
                :lastName="result.lastName" :description="result.description" :hourlyRate="result.hourlyRate"
                :fields="result.fields" :skills="result.skills" :jobRating="result.jobRating" :userImage="result.userImage"
                :location="result.location" :experience="result.experience" :aboutMe="result.aboutMe"
                :jobTitle="result.jobTitle" :jobsDone="result.jobsDone"></user-card>
        </div>

        <button v-if="moreMentorsOrNot" class="btn btn-primary" @click="loadMore">Load More Mentors</button>
    </section>
</template>
<script setup lang="ts">
import { Ref, ref, reactive, defineProps, defineEmits, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import SearchTag from "@/components/ui/SearchTag.vue";
import UserCard from "@/components/search-results/UserCard.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";
const isLoading: Ref<boolean> = ref(false);
const moreMentorsOrNot = computed(() => {
    return store.getters["coaches/moreMentorsOrNot"];
})



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
const store = useStore();
const props = defineProps({
    showSidebarToggle: {
        type: Boolean,
        required: true,
    },
    isLoadingg: {
        type: Boolean,
        required: true,
    },
});
const resultLength: Ref<number> = ref(0);
// const resultLength = computed(() => {
//     return store.getters["coaches/getSearchResultLength"];
// })
const emits = defineEmits(["toggleSidebar", "toggleIsLoading"]);
const toggleSidebar = () => {
    emits("toggleSidebar");
}

const searchedTags = reactive({
    tag1: "Front-End",
    tag2: "Back-End",
    tag3: "Full-Stack",
});

const searchMentor = async () => {
    try {
        isLoading.value = true;
        await store.dispatch("coaches/searchMentor");
    } catch (error) {
        console.log(error);
    }
    searchResult.value = await store.getters["coaches/getSearchResult"];
    resultLength.value = await store.getters["coaches/getTotalCount"];
    isLoading.value = false;
}

const loadMore = async () => {
    try {
        isLoading.value = true;
        await store.dispatch("coaches/loadMoreMentors");
    } catch (error) {
        console.log(error);
    }
    searchResult.value = await store.getters["coaches/getSearchResult"];
    resultLength.value = await store.getters["coaches/getTotalCount"];
    isLoading.value = false;
};

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
}
loadDefaultMentors();


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
        border-bottom: 2px solid lightgray;
        position: relative;

        p {
            color: $miner-text-color;
        }

        .search-bar-toggle {
            position: absolute;
            right: 11px;
            top: 0;
            border: 1px solid lightgray;
            background-color: transparent;
            border-radius: 50%;
            font-size: 1.4rem;
            display: none;
        }
    }
}

@media (max-width:767px) {
    .search-result {
        .text-wrapper {
            .search-bar-toggle {
                display: block;
            }
        }
    }
}
</style>