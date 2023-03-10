<template>
    <ContentRenderer v-bind="props"></ContentRenderer>
</template>

<script lang="ts" setup>
const props = defineProps(['flexible_content', 'padding']);

</script>