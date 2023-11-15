<template>
    <button>
        <slot></slot>
    </button>
</template>
<script setup></script>
<style lang="scss" scoped>
button {
    background-color: $main-purple;
    border-radius: 20px;
    color: white;
    padding: 4px 15px;
    border: none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.875rem;
}
</style>