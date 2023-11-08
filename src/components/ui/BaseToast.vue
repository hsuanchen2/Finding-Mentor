<template>
    <transition name="dialog">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" v-if="props.show">
            <div class="toast-header">
                <img :src="props.imgUrl">
                <strong class="mr-auto">{{props.header}}</strong>
            </div>
            <div class="toast-body">
                {{props.copy}}
            </div>
        </div>
    </transition>
</template>
<script setup>
    import { ref, defineProps } from "vue";
    const props = defineProps({
        firstName: {
            type: String,
        },
        show: {
            type: Boolean,
        },
        header: {
            type: String,
        },
        imgUrl: {
            type: String,
        },
        copy: {
            type: String,
        }
    })
</script>
<style lang="scss" scoped>
    .toast {
        display: block !important;
        position: fixed;
        top: 5rem;
        right: 5%;

        img {
            width: 6%;
            margin-right: 12px;
        }
    }

    .dialog-enter-from,
    .dialog-leave-to {
        opacity: 0;
        transform: scale(0.8);
    }

    .dialog-enter-active {
        transition: all .3s ease-out;
    }

    .dialog-leave-active {
        transition: all .3s ease-in;
    }

    .dialog-enter-to,
    .dialog-leave-from {
        opacity: 1;
        transform: scale(1);
        /* transform: translateX(30px); */
    }
</style>