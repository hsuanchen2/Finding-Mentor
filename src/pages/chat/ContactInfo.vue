<template>
    <transition name="slide">
        <div v-if="props.show" class="col col-xl-3 col-md-4 contact-info">
            <header class="">
                <h4>Contact Info</h4>
                <button @click="toggleContactInfo" class="contact-info-toggle">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </header>
            <main class="contact-user-info">
                <div class="contact-user-card">
                    <img src="@/../public/user-img/test2.jpg" class="user-avatar" alt="">
                    <div class="contact-title-wrapper">
                        <h3>Patrick Shyu</h3>
                        <h4>ex Google ex Facebook tech lead</h4>
                        <p>&#x2B50 4.4 (32)</p>
                    </div>
                </div>
                <div class="contact-user-details">
                    <div class="email">
                        <h4>Email</h4>
                        <p>techleadhd@gmail.com</p>
                    </div>
                    <div class="location">
                        <h4>Location</h4>
                        <p>United States</p>
                    </div>
                    <div class="email">
                        <h4>Charge</h4>
                        <p>$45 / hour</p>
                    </div>
                    <div class="location">
                        <h4>Expertise</h4>
                        <p>Software engineer</p>
                    </div>
                    <div class="skills">
                        <h4>Skills</h4>
                        <div class="skills-tags">
                            <SkillTag>Vue</SkillTag>
                            <SkillTag>Nodejs</SkillTag>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </transition>
</template>
<script lang="ts" setup>
import SkillTag from "@/components/ui/SkillTag.vue";
const props = defineProps({
    show: {
        type: Boolean,
        required: true
    }
});

const emits = defineEmits(["toggle-contact-info"]);
const toggleContactInfo = () => {
    emits("toggle-contact-info");
}
</script>
<style lang="scss" scoped>
.contact-info {
    padding-top: 20px;

    header {
        h4 {
            text-align: center;
        }

        .contact-info-toggle {
            display: none;
        }
    }

    main.contact-user-info {
        .skills-tags {
            display: flex;
            overflow-x: auto;
            gap: 5px;
            margin-top: 7px;
        }

        .contact-user-details {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-top: 20px;
            padding-left: 20px;

            h4 {
                font-size: 14px;
                margin-bottom: 0;
                color: $main-text-color;
            }

            p {
                font-size: 15px;
                margin-bottom: 0;
                word-wrap: break-word;
                overflow-wrap: break-word;
                color: $minor-text-color;
            }
        }

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }

        .contact-user-card {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            border-bottom: 1px solid lightgray;

            .contact-title-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                padding-bottom: 10px;

                h3 {
                    font-size: 18px;
                    color: $main-text-color;
                    margin-bottom: 0;
                }

                h4 {
                    font-size: 14px;
                    margin-bottom: 0;
                    color: $minor-text-color;
                    font-weight: 400;
                    font-style: italic;
                }

                p {
                    font-size: 14px;
                    color: $minor-text-color;
                    margin-bottom: 0;
                }
            }
        }
    }
}


.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
}

@media (max-width: 768px) {
    .contact-info {
        position: absolute;
        right: 0;
        top: 0;
        width: 60%;
        min-width: 300px;
        height: 100%;
        background-color: #F6F9FC;
        box-shadow: $light-card-shadow;
        border-radius: 0 10px 10px 0;
        z-index: 20;

        header {
            display: flex;
            justify-content: center;
            align-items: center;

            h4 {
                text-align: center;
                width: 100%;
                margin-bottom: 0;
            }

            .contact-info-toggle {
                display: block;
                border: none;
                background: none;

                i {
                    font-size: 22px;
                    color: $minor-text-color;
                    padding-right: 15px;
                }
            }
        }
    }
}</style>