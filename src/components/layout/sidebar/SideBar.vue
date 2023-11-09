<template>
    <section class="container">
        <div class="row">
            <div class="accordion col col-3">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                            {{props.fieldData.title}}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <ul>
                                <li v-for="(field, index) in props.fieldData.fieldData" :key="index">
                                    <input :type="field.type" :id="field.id">
                                    <label :for="field.id">{{field.title}}</label>
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
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <ul>
                                <li>Front-End</li>
                                <li>Back-End</li>
                                <li>Full-Stack</li>
                                <li>UI/UX</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item show">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <ul>
                                <li>Front-End</li>
                                <li>Back-End</li>
                                <li>Full-Stack</li>
                                <li>UI/UX</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { defineProps } from "vue";
    const props = defineProps({
        fieldData: {
            type: Object
        }
    })
</script>
<style lang="scss" scoped>
    .accordion {
        background-color: transparent;
        padding-right: 50px;
        padding-left: 0;

        .accordion-item {
            background-color: transparent;
            border: none;
        }

        .accordion-button {
            background-color: transparent;
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

        .accordion-body {
            padding: 10px 0 5px 0;
        }

        .accordion-header {
            button {
                font-weight: 700;
                color: $main-text-color;
            }
        }
    }

    ul {
        padding-left: 0;

        li {
            list-style-type: none;
            color: $miner-text-color;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        label,
        input {
            cursor: pointer;
        }

        input[type="checkbox"] {
            width: 15px;
            height: 15px;
            accent-color: $main-purple;
        }
    }
</style>