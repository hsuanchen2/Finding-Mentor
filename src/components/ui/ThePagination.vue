<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>
<script setup>
import { ref, defineProps } from "vue";
</script>
<style lang="scss" scoped>
nav {
    margin: 20px auto;

    ul {
        li {
            cursor: pointer;

            a {
                color: $miner-text-color;
                border: 1px solid $main-purple;

                &:hover {
                    color: $miner-text-color;
                    border: 1px solid $main-purple;
                }
            }
        }
    }
}
</style>