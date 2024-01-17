<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <!-- <li v-for="(index, hong) in props.resultLength" class="page-item" @click="switchPage(index)"> <a class="page-link"
                    href="#">{{ index }}</a>
            </li> -->
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import { Ref, ref, defineProps, onMounted, computed, defineEmits } from "vue";
import { useStore } from "vuex";
const store = useStore();
const emits = defineEmits(["switchPage"]);
const props = defineProps({
    resultLength: Number,
});
const pageIndex: Ref<number> = ref(0);
const switchPage = (whichPage: number): void => {
    emits("switchPage", pageIndex);
}; 

</script>
<style lang="scss" scoped>
nav {
    margin: 20px auto;

    ul {
        li {
            cursor: pointer;

            a {
                color: $miner-text-color;

                &:hover {
                    color: $miner-text-color;
                }
            }
        }
    }
}
</style>