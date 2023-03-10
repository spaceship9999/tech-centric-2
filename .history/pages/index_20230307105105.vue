<template>
    <ContentRenderer :flexible_content="pageData[0].acf.flexible_content"></ContentRenderer>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
interface page {
    id: Number,
    acf: {
        flexible_content: Array<{}>
    }
}
const { data: pageData, error } = await useFetch<[page]>(`${runtimeConfig.BASE_URL}/wp-json/wp/v2/pages?slug=homepage`)
if (error.value?.statusCode === 404) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });
}
console.log(pageData);
</script>