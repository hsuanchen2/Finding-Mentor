<template>
    <section class="container">
        <div class="row">
            <div class="col col-lg-5 col-12">
                <p class="text-start">Thinking about getting into software?</p>
                <h2>
                    That's exactly what we meant to be!
                </h2>
                <p>
                    We have successfully matched over a thousand career consultations, guiding individuals on their
                    transformative journey to discover and secure their dream jobs.
                </p>
            </div>
            <div class="col col-lg-7 col-12 cards-container">
                <div class="row">
                    <genre-card class="col col-4"></genre-card>
                    <genre-card class="col col-4"></genre-card>
                    <genre-card class="col col-4"></genre-card>
                    <genre-card class="col col-4"></genre-card>
                    <genre-card class="col col-4"></genre-card>
                    <genre-card class="col col-4"></genre-card>
                    <genre-card class="col col-4"></genre-card>
                    <genre-card class="col col-4"></genre-card>
                    <genre-card class="col col-4"></genre-card>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import GenreCard from "@/components/ui/main-page/GenreCard.vue"
</script>
<style scoped lang="scss">
.container {
    max-width: 1200px;
    margin: 100px auto
}

.cards-container {
    justify-content: space-around;
    align-items: center;

    .col {
        margin-bottom: 25px;
    }
}
</style>