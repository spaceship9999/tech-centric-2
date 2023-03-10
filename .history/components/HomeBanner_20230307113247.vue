<template>
    <div class="container">
        <div class="flex">
            <h1>{{ heading }}</h1>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['heading', 'image']);
</script>