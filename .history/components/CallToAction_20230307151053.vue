<template>
    <div class="container">
        <h3 class="t-64 font-bold text-center">{{ heading }}</h3>
        <div v-html="content" class="text-center t-24 font-bold max-w-[900px] mx-auto"></div>
        <div class="mt-8 flex justify-center lg:justify-start">
            <NuxtLink class="inline-block bg-orange text-center min-w-[250px] rounded-full py-5 px-2 hover:scale-[1.2] hover:bg-white hover:text-orange duration-700 ease-[cubic-bezier(.12,.46,.71,.94)]" :to="link.url" >{{ link.title }}</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['heading', 'content', 'link']);
</script>