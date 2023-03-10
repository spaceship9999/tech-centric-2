<template>
        <ContentRenderer :flexible_content="pageData?.data?.acf?.flexible_content"></ContentRenderer>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const { data: pageData, error } = await useFetch<content>(`${runtimeConfig.API_BASE_URL}/wp-json/wesg/v1/page?path=/`)
if (error.value?.statusCode === 404) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });
}
</script>