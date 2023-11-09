<template>
    <div class="wrapper">
        <side-bar :fieldData="fields"></side-bar>
    </div>
</template>
<script setup>
    import { ref, reactive } from "vue";
    import SideBar from "@/components/layout/sidebar/SideBar.vue";
    const fields = reactive({
        title: "Field",
        fieldData: [
            {
                id: "Front-End",
                title: "Front-End",
                name: "Front-End",
                type: "checkbox",
            },
            {
                id: "Back-End",
                title: "Back-End",
                name: "Back-End",
                type: "checkbox"
            },
            {
                id: "Full-Stack",
                title: "Full-Stack",
                name: "Full-Stack",
                type: "checkbox"
            },
            {
                id: "UI/UX",
                title: "UI/UX",
                name: "UI/UX",
                type: "checkbox"
            },
            {
                id: "Data Scientist",
                title: "Data Scientist",
                name: "Data Scientist",
                type: "checkbox"
            },
            {
                id: "DevOps",
                title: "DevOps",
                name: "DevOps",
                type: "checkbox"
            },
            {
                id: "Product Management",
                title: "Product Management",
                name: "Product Management",
                type: "checkbox"
            }
        ]
    });


</script>
<style scoped lang="scss">
    .wrapper {
        max-width: 1200px;
        margin: 100px auto;
        /* border: 1px solid red; */
    }
</style>