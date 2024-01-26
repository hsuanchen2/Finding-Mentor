<template>
    <section class="search-result">
        <div class="text-wrapper">
            <h3>Search results</h3>
            <p>{{ searchResult.length }} matched results were found</p>
            <span @click="toggleSidebar">
                <button class="search-bar-toggle hidden"><i class="fa-solid fa-sliders" style="color: #635bff;"></i>
                </button></span>
            <div class="search-tags">
                <search-tag :searchCriteria="props.searchCriteria"></search-tag>
                <span v-if="searchCriteriaExists" class="clear-filter" @click="reSearchMentor">Clear filters</span>
            </div>
        </div>
        <div class="user-card-container">
            <base-spinner v-if="isLoading || props.isLoadingg"></base-spinner>
            <user-card v-if="!isMentorsListEmpty" v-for="result in props.searchResult" :id="result.id"
                :firstName="result.firstName" :lastName="result.lastName" :description="result.description"
                :hourlyRate="result.hourlyRate" :fields="result.fields" :skills="result.skills"
                :jobRating="result.jobRating" :userImage="result.userImage" :location="result.location"
                :experience="result.experience" :aboutMe="result.aboutMe" :jobTitle="result.jobTitle"
                :jobsDone="result.jobsDone"></user-card>
            <no-mentors-found v-else></no-mentors-found>
        </div>
        <base-spinner v-if="props.isLoadMoreLoading"></base-spinner>
        <button v-if="moreMentorsOrNot" class="btn" @click="loadMore">Load More Mentors</button>

    </section>
</template>
<script setup lang="ts">
import { Ref, ref, reactive, defineProps, defineEmits, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import SearchTag from "@/components/ui/SearchTag.vue";
import NoMentorsFound from "@/pages/talents/NoMentorsFound.vue";
import UserCard from "@/components/search-results/UserCard.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";

const searchCriteriaExists = computed(() => {
    return store.getters["coaches/getSearchCriteria"];
})
const moreMentorsOrNot = computed(() => {
    return store.getters["coaches/moreMentorsOrNot"];
})

const isMentorsListEmpty = computed((): boolean => {
    return props.searchResult.length === 0;
})

const reSearchMentor = () => {
    emits("reSearchMentors");
}

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
// const searchResult: Ref<Mentor[]> = ref([]);
const store = useStore();
const props = defineProps({
    showSidebarToggle: {
        type: Boolean,
        required: true,
    },
    isLoading: {
        type: Boolean,
        required: true,
    },
    searchResult: {
        type: Array,
        required: true,
    },
    isLoadMoreLoading: {
        type: Boolean,
        required: true,
    },
    searchCriteria: {
        type: Object,
        required: false,
    },
});

// const resultLength = computed(() => {
//     return store.getters["coaches/getSearchResultLength"];
// })
const emits = defineEmits(["toggleSidebar", "toggleIsLoading", "loadMore", "reSearchMentors"]);
const toggleSidebar = () => {
    emits("toggleSidebar");
}


// const searchMentor = async () => {
//     try {
//         isLoading.value = true;
//         await store.dispatch("coaches/searchMentor");
//     } catch (error) {
//         console.log(error);
//     }
//     searchResult.value = await store.getters["coaches/getSearchResult"];
//     resultLength.value = await store.getters["coaches/getTotalCount"];
//     isLoading.value = false;
// }

const loadMore = async () => {
    emits("loadMore");
};

// const loadDefaultMentors = async () => {
//     try {
//         isLoading.value = true;
//         await store.dispatch("coaches/loadDefaultMentors");
//     } catch (error) {
//         console.log(error);
//     }
//     searchResult.value = await store.getters["coaches/getSearchResult"];
//     resultLength.value = await store.getters["coaches/getTotalCount"];
//     isLoading.value = false;
// }
// loadDefaultMentors();


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
.btn {
    background-color: $main-button-color;
    color: white;
    margin-top: 15px;
    transition: .3s;
    &:hover {
        background-color: lighten($main-button-color, 10%);
    }
}
</style>