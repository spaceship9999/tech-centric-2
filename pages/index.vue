<template>
    <ContentRenderer :flexible_content="pageData ? pageData[0].acf.flexible_content: []"></ContentRenderer>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
interface page {
    id: Number,
    acf: {
        flexible_content: Array<{}>
    },
    yoast_head_json: {
        title: String,
        canonical: String,
        og_locale: String,
        og_type: String,
        og_title: String,
        og_url: String,
        og_site_name: String,

    }
}
const { data: pageData, error } = await useFetch<[page]>(`${runtimeConfig.BASE_URL}/wp-json/wp/v2/pages?slug=homepage`) 
if (error.value?.statusCode === 404) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });
}

useHead({
    title: pageData.value[0]?.yoast_head_json.title,
    meta: [{
        name: 'description',
        content: pageData.value[0]?.yoast_head_json.title,
    }, {
        name: 'og:locale',
        content: pageData.value[0]?.yoast_head_json.og_locale,
    }, {
        name: 'og:title',
        content: pageData.value[0]?.yoast_head_json.og_title,
    }]
});

</script>