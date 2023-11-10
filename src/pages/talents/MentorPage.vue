<template>
    <div class="wrapper">
        <side-bar :fieldData="fields" :skills="skills" :rating="rating" :hourlyRateData="hourlyRate"></side-bar>
    </div>
</template>
<script setup>
    import { ref, reactive } from "vue";
    import SideBar from "@/components/layout/sidebar/SideBar.vue";
    import skillData from "@/data/skills.json";
    import fieldsData from "@/data/fields.json";
    import ratingData from "@/data/rating.json";
    import hourlyRateData from "@/data/hourlyRate.json";
    const fields = reactive(fieldsData);
    const skills = reactive(skillData);
    const rating = reactive(ratingData)
    const hourlyRate = reactive(hourlyRateData);

    const getLocation = async (location) => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${location}`);
            console.log(response.json());
        } catch (error) {
            console.log(error);
        }
    }
    getLocation("india"); 
</script>
<style scoped lang="scss">
    .wrapper {
        max-width: 1200px;
        margin: 100px auto;
    }
</style>