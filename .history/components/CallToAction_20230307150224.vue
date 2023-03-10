<template>
    <div class="container">
        <h3 class="t-64 font-bold text-center">{{ heading }}</h3>
        <div v-html="content" class="text-center t-24 font-medium"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['heading', 'content', 'link']);
</script>