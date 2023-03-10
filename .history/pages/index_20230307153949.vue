<template>
    <ContentRenderer :flexible_content="pageData ? pageData[0].acf.flexible_content: []"></ContentRenderer>
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

useHead({
    title: pageData.value?.yoast_head_json,
    meta: [{
        name: 'description',
        content: pageData.value?.data?.seo?.description,
    }, {
        name: 'og:title',
        content: pageData.value?.data?.seo?.['og-title']
    }, {
        name: 'og:description',
        content: pageData.value?.data?.seo?.['og-description']
    }]
});

</script>