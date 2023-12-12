<template>
    <div class="wrapper" ref="autoComplete_wrapper">
        <input id="autoComplete" type="search" dir="ltr" spellcheck=false autocorrect="off" autocomplete="off"
            autocapitalize="off">
    </div>
</template>
<script setup>
import { ref, reactive, onMounted, defineProps } from "vue";
import autoComplete from '@tarekraafat/autoComplete.js';
const autoComplete_wrapper = ref(null);
const props = defineProps({
    country: {
        type: Array
    }
})
const autoCompleteJS = ref(null);

onMounted(() => {
    const autoCompleteData = {
        placeHolder: "Search location",
        wrapper: false,
        data: {
            src: props.country.map(country => ({ name: country.name, flag: country.flag })),
            // use the key "name" as keyword for searching
            keys: ["name"],
            cache: true
        },

        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value.name;
                    autoCompleteJS.value.input.value = selection;
                }
            }
        },
        threshold: 2,
        debounce: 300,
        resultsList: {
            tag: "div",
            id: "autoComplete_list",
            destination: "#autoComplete",
            position: "afterend",
            maxResults: 5,
            noResults: true,
            tabSelect: true,
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
        resultItem: {
            tag: "div",
            class: "result_item",
            element: (item, data) => {
                const flag = document.createElement("img");
                flag.src = data.value.flag;
                item.prepend(flag);
            }
        }
    }
    autoCompleteJS.value = new autoComplete(autoCompleteData);
});
</script>
<style lang="scss" scoped> /* https://codepen.io/tarekraafat/pen/rQopdW */

 #autoComplete {
     width: 100%;
     padding-left: 7px;
     border-radius: 5px;
     border: 1px solid $miner-text-color;

     &:focus {
         outline: none;
     }
 }

 #autoComplete_list {
     border: 1px solid lightgray;
     background-color: white;
     border-radius: 5px;
     box-shadow: $light-card-shadow;
     margin-top: 5px;
     padding: 5px 5px;
 }
</style>