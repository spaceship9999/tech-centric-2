<template>
    <div></div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const { data: pageData, error } = await useFetch(`${runtimeConfig.BASE_URL}/wp-json/wp/v2/page?slug=homepage`)
if (error.value?.statusCode === 404) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });
}
console.log(pageData);
</script>