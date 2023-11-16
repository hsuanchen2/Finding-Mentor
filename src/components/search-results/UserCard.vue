<template>
    <div class="user-card">
        <!-- header -->
        <header>
            <div class="user-image-wrapper">
                <img src="@/../public/user-img/test.png" class="user-image" alt="">
                <span class="status"></span>
            </div>
            <div class="user-info-text">
                <h3>Patrick Shyu</h3>
                <h4>ex Google ex Facebook techlead</h4>
                <p class="location"><i class="fa-solid fa-location-dot" style="color: #ad76db;"></i>United State</p>
            </div>
            <button class="add-to-favorite">
                <i class="fa-regular fa-heart" style="color: #cd70ff;"></i>
            </button>
        </header>

        <!-- hourly rate -->
        <div class="hourly-rate">
            <p><span>$30</span>/hour</p>
        </div>
        <div class="user-desc">
            <p>🚀 Top Rated | Certified Developer with 3+ Years of Experience | 100% Job Success | 100% Customer
                Satisfaction 🌟</p>
        </div>
        <div :class="{ 'skill-tags': true, 'left-side-fade': scrollPosition.end, 'right-side-fade': scrollPosition.start, 'both-side-fade': scrollPosition.mid }"
            ref="scroll" @scroll="hitEnd">
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
            <skill-tag>Java</skill-tag>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
const scroll = ref(null);
const scrollPosition = reactive({
    start: true,
    mid: null,
    end: null,
});
const hitEnd = () => {
    const scrollLeft = Math.ceil(scroll.value.scrollLeft);
    const offsetWidth = scroll.value.offsetWidth;
    const width = scroll.value.scrollWidth;
    scrollPosition.start = scrollLeft === 0;
    scrollPosition.mid = scrollLeft !== 0 && scrollLeft + offsetWidth !== width;
    scrollPosition.end = scrollLeft + offsetWidth === width;

    console.log(scrollPosition.mid);
}
import SkillTag from "@/components/ui/SkillTag.vue"; 
</script>
<style lang="scss" scoped>
.user-card {
    transition: .2s ease;
    cursor: pointer;
    padding: 15px 25px;

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
        width: 50px;
        height: 50px;
    }
}

.add-to-favorite {
    background-color: transparent;
    border: 2px solid lightgray;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 20px;
}

.hourly-rate {
    p {
        font-size: 0.95rem;
        color: $main-text-color;

        span {
            font-weight: 700;
        }
    }
}

.location {
    display: flex;
    align-items: center;
}

.user-desc {
    font-size: 0.9rem;
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
    -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0));
}

.right-side-fade {
    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0));
}

.both-side-fade {
    -webkit-mask-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 95%, rgba(255,255,255,0) 100%);
}
</style>