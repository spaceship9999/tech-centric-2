<template>
    <div>
        <h3>{{ heading}}</h3>
        <div>{{ content }}</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['heading', 'content', 'link']);
</script>