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
                                    <input :type="field.type" :id="field.id" :name="field.name">
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
                            {{props.skills.title}}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <ul>
                                <li v-for="(language, index) in props.skills.languages" :key="index">
                                    <input :type="language.type" :id="language.id" :name="language.name">
                                    <label :for="language.id">{{language.title}}</label>
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
                            {{props.rating.title}}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <ul>
                                <li v-for="(rate, index) in props.rating.rateRange" :key="index">
                                    <input :type="rate.type" :id="rate.id" :name="props.rating.name">
                                    <label :for="rate.id">{{rate.title}}</label>
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
                            {{props.hourlyRateData.title}}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingFour">
                        <div class="accordion-body">
                            <ul>
                                <li v-for="(hourlyRate, index) in props.hourlyRateData.hourlyRateRange" :key="index">
                                    <input :type="hourlyRate.type" :id="hourlyRate.id"
                                        :name="props.hourlyRateData.name">
                                    <label :for="hourlyRate.id">{{hourlyRate.title}}</label>
                                </li>
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
        },
        skills: {
            type: Object
        },
        rating: {
            type: Object
        },
        hourlyRateData: {
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

        input[type="checkbox"], input[type="radio"] {
            width: 15px;
            height: 15px;
            accent-color: $main-purple;
        }
    }
</style>