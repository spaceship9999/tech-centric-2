<template>
    <div class="container">
        <div class="flex">
            <div class="lg:w-1/2 flex relative">
                <img class="lg:ml-auto" :src="props.image.url" :alt="props.image.alt"/>
            </div>
            <div class="lg:w-1/2 lg:pl-8">
                <h2>{{ heading }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['heading', 'content', 'link', 'image', 'lottie'])
</script>