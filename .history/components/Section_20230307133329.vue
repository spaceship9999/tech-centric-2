<template>
    <div>
        <ContentRenderer v-bind="props"></ContentRenderer>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['flexible_content', 'padding']);

</script>