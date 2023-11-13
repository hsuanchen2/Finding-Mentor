<template>
    <input id="autoComplete" type="search" dir="ltr" spellcheck=false autocorrect="off" autocomplete="off"
        autocapitalize="off">
</template>
<script setup>
    import { ref, reactive, onMounted, defineProps } from "vue";
    import autoComplete from '@tarekraafat/autoComplete.js';
    const props = defineProps({
        country: {
            type: Array
        }
    })
    const autoCompleteJS = ref(null);
    const autoCompleteData = ref({
        placeHolder: "Search location",
        wrapper: false,
        data: {
            src: props.country.map(el => el.name),
            cache: true
        },

        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.value.input.value = selection;
                }
            }
        },
        threshold: 2,
        debounce: 300,
        resultsList: {
            tag: "ul",
            id: "autoComplete_list",
            class: "results_list",
            destination: "#autoComplete",
            position: "afterend",
            maxResults: 5,
            noResults: true,
        },
        resultsItem: {
            id: "list-item"
        }
    });
    onMounted(() => {
        autoCompleteJS.value = new autoComplete(autoCompleteData.value);
    });
</script>
<style lang="scss" scoped>
    @import url('https://cdn.jsdelivr.net/npm/@tarekraafat/autoComplete.js/dist/css/autoComplete.min.css');
    #autoComplete_list {
        #autoComplete_result_0 {
            list-style: none;
            color: red;
        }
    }
</style>