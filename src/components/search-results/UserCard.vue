<template>
    <div class="user-card">
        <!-- header -->
        <header>
            <div class="user-image-wrapper">
                <img :src="props.userImage" class="user-image" alt="">
                <span class="status"></span>
            </div>
            <div class="user-info-text">
                <h3>{{ props.firstName }} {{ props.lastName }}</h3>
                <h4>{{ props.jobTitle }}</h4>
                <p class="location"><i class="fa-solid fa-location-dot" style="color: #ad76db;"></i>{{ props.location }}</p>
                <p>&#x2B50 {{ props.jobRating }} ({{ props.jobsDone }})</p>
            </div>
            <button class="add-to-favorite" @click="addToFavorite">
                <i class="fa-regular fa-heart" style="color: #cd70ff;"></i>
            </button>
        </header>

        <!-- hourly rate -->
        <div class="hourly-rate">
            <p><span>${{ props.hourlyRate }}</span>/hour</p>
        </div>
        <div class="user-desc">
            <p>{{ props.aboutMe }}</p>
        </div>
        <div :class="{ 'skill-tags': true, 'left-side-fade': scrollPosition.end, 'right-side-fade': scrollPosition.start, 'both-side-fade': scrollPosition.mid }"
            ref="scroll" @scroll="detactPosition">
            <skill-tag v-for="skill in props.skills">{{ skill }}</skill-tag>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Ref, ref, reactive, onMounted, defineProps, defineEmits } from "vue";
import { useStore } from "vuex";
import SkillTag from "@/components/ui/SkillTag.vue";
const scroll: Ref<any> = ref(null);
const store = useStore();
const props = defineProps({
    id: String,
    aboutMe: String,
    experience: String,
    firstName: String,
    lastName: String,
    description: String,
    hourlyRate: Number,
    skills: Array,
    fields: Array,
    jobRating: Number,
    jobsDone: Number,
    jobTitle: String,
    userImage: String,
    location: String,
});

interface ScrollPosition {
    start: boolean;
    mid: boolean | null;
    end: boolean | null;
}
const scrollPosition = reactive<ScrollPosition>({
    start: true,
    mid: null,
    end: null,
});
const detactPosition = (): void => {
    const scrollLeft = Math.ceil(scroll.value.scrollLeft);
    const offsetWidth = scroll.value.offsetWidth;
    const width = scroll.value.scrollWidth;
    scrollPosition.start = scrollLeft === 0;
    scrollPosition.mid = scrollLeft !== 0 && (scrollLeft + offsetWidth < width);
    scrollPosition.end = (scrollLeft + offsetWidth) >= width;
}


const addToFavorite = (e: MouseEvent) => {
    store.dispatch("cart/setCartItemsToLocalStorage", {
        userId: props.id,
        userImage: props.userImage,
        firstName: props.firstName,
        lastName: props.lastName,
        jobTitle: props.jobTitle,
        hourlyRate: props.hourlyRate,
        jobsDone: props.jobsDone,
        jobRating: props.jobRating,
    })
}

// onMounted(() => {
//     console.log(props);
// })
</script>
<style lang="scss" scoped>
.user-card {
    transition: .2s ease;
    max-height: 230px;
    cursor: pointer;
    padding: 15px 25px;
    box-shadow: $light-card-shadow;
    border-radius: 10px;

    &:hover {
        background-color: #f4eeff;
    }

    header {
        display: flex;
        align-items: center;
        gap: 25px;

        .user-info-text {
            display: flex;
            flex-direction: column;
            gap: 3px;

            h3 {
                font-size: 1rem;
                margin-bottom: 0;
            }

            h4,
            p {
                font-size: 0.9rem;
                margin-bottom: 0;
            }

            h4 {
                color: $miner-text-color;
                font-style: italic;
            }

            i {
                margin-right: 5px;
            }
        }
    }

    .user-image-wrapper {
        position: relative;

        .status {
            position: absolute;
            background-color: green;
            width: 14px;
            height: 14px;
            bottom: -2px;
            right: 0px;
            border-radius: 50%;
            border: 2px solid white;
        }
    }

    .user-image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }
}

.add-to-favorite {
    background-color: transparent;
    border: 2px solid lightgray;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 20px;
    transition: .2s;
    &:active {
        transform: translateY(-5px);
    }
    &:hover {
        background-color: lightgray;
    }
}

.hourly-rate {
    p {
        font-size: 0.95rem;
        color: $main-text-color;
        margin-bottom: 10px;

        span {
            font-weight: 700;
        }
    }
}

.location {
    display: flex;
    align-items: center;
    min-width: 130px;
}

.user-desc {
    font-size: 0.9rem;

    p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

::-webkit-scrollbar {
    width: 15px;
    height: 5px;
}

::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 2px;
    width: 15px;
}

.skill-tags {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 0 0 15px 0;
}

.left-side-fade {
    -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 98%, rgba(0, 0, 0, 0));
}

.right-side-fade {
    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 98%, rgba(0, 0, 0, 0));
}

.both-side-fade {
    -webkit-mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 2%, rgba(255, 255, 255, 1) 98%, rgba(255, 255, 255, 0) 100%);
}

// hide scrollbar
@media (max-width: 414px) {
    .skill-tags::-webkit-scrollbar {
        display: none;
    }

    .skill-tags {
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }
}
</style>