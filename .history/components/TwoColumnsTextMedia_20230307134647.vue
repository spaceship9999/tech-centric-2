<template>
    <div class="container">
        <div class="flex flex-col lg:flex-row itmes-center" :class="{'lg:flex-row-reverse': reverse}">
            <div class="lg:w-1/2 flex relative">
                <img class="lg:ml-auto" :src="props.image.url" :alt="props.image.alt"/>
            </div>
            <div class="lg:w-1/2 lg:pl-8 flex flex-col justify-center">
                <h2 class="t-64 font-metropolis leading-none font-bold">{{ heading }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['heading', 'content', 'link', 'image', 'lottie', 'reverse'])
</script>