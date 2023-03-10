<template>
    <div class="!mt-0">
        <ContentRenderer v-bind="props"></ContentRenderer>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['flexible_content', 'padding']);

</script>