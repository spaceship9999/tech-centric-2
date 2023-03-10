<template>
    <div>
        <h3 class="t-64 font-bold">{{ heading }}</h3>
        <div>{{ content }}</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['heading', 'content', 'link']);
</script>