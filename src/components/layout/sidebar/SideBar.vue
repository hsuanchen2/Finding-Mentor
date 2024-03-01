<template>
    <aside>
        <div v-if="props.showBackdrop" class="backdrop" @click="toggleSidebar"></div>
        <form @submit.prevent="searchMentors" class="accordion pe-md-5 ps-md-0 py-md-0 px-3 pt-5 pb-5">
            <h3>Filter by</h3>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne">
                        <i :class="props.fieldData.icon"></i> {{ props.fieldData.title }}
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse show"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <ul>
                            <li v-for="(field, index) in props.fieldData.fieldData" :key="index">
                                <input :type="field.type" :id="field.id" :name="field.name" :value="field.name"
                                    v-model="searchFormData.fields" @input="checkAnyField">
                                <label :for="field.id">{{ field.title }}</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        <i :class="props.skills.icon"></i> {{ props.skills.title }}
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <ul>
                            <li v-for="(language, index) in props.skills.languages" :key="index">
                                <input :type="language.type" :id="language.id" :name="language.name" :value="language.name"
                                    v-model="searchFormData.skills" @input="checkAnyLanguage">
                                <label :for="language.id">{{ language.title }}</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item show">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseThree">
                        <i :class="props.rating.icon"></i>{{ props.rating.title }}
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        <ul>
                            <li v-for="(rate, index) in props.rating.rateRange" :key="index">
                                <input :type="rate.type" :id="rate.id" :name="props.rating.name" :value="rate.name"
                                    v-model="searchFormData.rating">
                                <label :for="rate.id">{{ rate.title }}</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item show">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseFour">
                        <i :class="props.hourlyRateData.icon"></i> {{ props.hourlyRateData.title }}
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingFour">
                    <div class="accordion-body">
                        <ul>
                            <li v-for="(hourlyRate, index) in props.hourlyRateData.hourlyRateRange" :key="index">
                                <input :type="hourlyRate.type" :id="hourlyRate.id" :name="props.hourlyRateData.name"
                                    :value="hourlyRate.name" v-model="searchFormData.hourlyRate">
                                <label :for="hourlyRate.id">{{ hourlyRate.title }}</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item show last-child">
                <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseFive">
                        <i class="fa-solid fa-location-dot"></i> Location ( Required )
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingFive">
                    <div class="accordion-body">
                        <sidebar-search class="sidebar-search" :country="countryData" :v-model="searchFormData.location"
                            @updateLocationValue="updateLocation"></sidebar-search>
                    </div>
                </div>
            </div>
            <div>
                <button class="search-btn" type="submit">Search</button>
            </div>
        </form>
    </aside>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, reactive, Ref, ref } from "vue";
import { useStore } from "vuex";
import sidebarSearch from "./SidebarSearch.vue";
import countryData from "@/data/countries.json";
// import BaseSpinner from "@/ui/BaseSpinner.vue";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const isLoading: Ref<boolean> = ref(false);
const store = useStore();
interface SearchFormData {
    fields: Array<string>;
    skills: Array<string>;
    rating: number;
    hourlyRate: number;
    location: string;
}
const props = defineProps({
    fieldData: {
        type: Object
    },
    skills: {
        type: Object
    },
    rating: {
        type: Object
    },
    hourlyRateData: {
        type: Object
    },
    showBackdrop: {
        type: Boolean,
    },
});
const updateLocation = (location: string) => {
    searchFormData.location = location;
}
const checkAnyField = (e: Event) => {
    if (e.target.value === "any-field") {
        searchFormData.fields = ["any-field"];
    } else {
        const anyFieldIndex = searchFormData.fields.indexOf("any-field");
        anyFieldIndex !== -1 && searchFormData.fields.splice(anyFieldIndex, 1);
    }
}

const checkAnyLanguage = (e: Event) => {
    if (e.target.value === "any-language") {
        searchFormData.skills = ["any-language"];
    } else {
        const anyLanguageIndex = searchFormData.skills.indexOf("any-language");
        anyLanguageIndex !== -1 && searchFormData.skills.splice(anyLanguageIndex, 1);
    }
}

const searchFormData: SearchFormData = reactive({
    fields: [],
    skills: [],
    rating: 0,
    hourlyRate: 0,
    location: ""
})


const emits = defineEmits(["toggleSidebar", "updateLoading", "searchMentors"]);
const toggleSidebar = (): void => {
    emits("toggleSidebar");
}

const searchMentors = () => {
    emits("searchMentors", searchFormData);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// const searchMentors = async () => {
//     updateLoading();
//     await store.dispatch("coaches/searchMentors", searchFormData);
//     props.showBackdrop && toggleSidebar();
//     updateLoading();
//     console.log(searchFormData);
// }

</script>
<style lang="scss" scoped>
h3 {
    margin-bottom: 57px;
    color: $main-text-color;
    font-size: 1.4rem;
}

.accordion {
    background-color: transparent;

    .accordion-item {
        background-color: transparent;
        border: none;
    }

    .accordion-button {
        background-color: transparent;
        color: $main-text-color;
        box-shadow: none;
        padding: 5px 0;
    }

    .accordion-button:focus {
        box-shadow: none;
    }

    .accordion-item:not(:last-child) {
        border-bottom: 2px solid lightgray;
        margin-bottom: 10px;
    }

    .accordion-item.last-child {
        border-bottom: none;
    }

    .accordion-body {
        padding: 10px 0 5px 0;
    }

    .accordion-header {
        button {
            font-weight: 700;
            color: $main-text-color;
        }

        i {
            margin-right: 8px;
            color: #6672E4;
            font-size: 0.9rem;
            font-weight: 700;
            font-style: bold;
        }
    }
}

ul {
    padding-left: 0;

    li {
        list-style-type: none;
        color: $minor-text-color;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    label {
        cursor: pointer;
        display: block;
    }

    input[type="checkbox"],
    input[type="radio"] {
        width: 15px;
        height: 15px;
        accent-color: #6672E4;
        cursor: pointer;
    }

    input[type="text"] {
        border-radius: 5px;
        border: 2px solid $minor-text-color;
        padding-left: 10px;
    }

    input[type="search"] {
        width: 100%;
    }


}

.search-btn {
    width: 100%;
    border-radius: 10px;
    background-color: $main-button-color;
    border: none;
    color: white;
    line-height: 1.7;
    margin-top: 10px;
    transition: 0.3s ease;

    &:hover {
        background-color: lighten($main-button-color, 10%);
    }
}



// sidebar for mobile
@media (max-width:767px) {
    .backdrop {
        background-color: rgba(0, 0, 0, 0.75);
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 50;
        overflow: auto;
    }

    .accordion {
        width: calc(100% - 64px);
        max-width: 400px;
        height: 100vh;
        position: fixed;
        overflow-y: scroll;
        background-color: #fff;
        z-index: 60;
        left: 0;
        top: 0;
    }

    h3 {
        margin-bottom: 25px;
    }
}
</style>