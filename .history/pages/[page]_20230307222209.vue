<template>
    <div>Page</div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
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
const { data: pageData, error } = await useFetch<[page]>(`${runtimeConfig.BASE_URL}/wp-json/wp/v2/pages?slug=${route.params.page}`)
if (error.value?.statusCode === 404) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });
}

</script>