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
            element: (list, data) => {
                const info = document.createElement("p");
                if (data.results.length > 0) {
                    info.innerHTML = `Found ${data.results.length}</strong> out of <strong>${data.matches.length}</strong> results`;
                } else {
                    info.innerHTML = `No result found`;
                }
                list.prepend(info);
            },
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
    /* @import url('https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/css/autoComplete.min.css'); */

    /* https://codepen.io/tarekraafat/pen/rQopdW */
    input {
        width: 100%;
        padding-left: 7px;
    }

    ul {
        padding-inline-start: 0 !important;
    }

    #autoComplete_list.result_list {
        padding-left: 0 !important;
    }
</style>