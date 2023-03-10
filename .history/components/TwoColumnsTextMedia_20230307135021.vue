<template>
    <div class="container">
        <div class="flex flex-col lg:flex-row itmes-center" :class="{'lg:flex-row-reverse': reverse}">
            <div class="lg:w-1/2 flex relative">
                <img class="mx-auto max-w-[300px] lg:max-w-max lg:ml-auto" :src="props.image.url" :alt="props.image.alt"/>
            </div>
            <div class="lg:w-1/2 lg:pl-8 flex flex-col justify-center">
                <h2 class="t-64 font-metropolis leading-none font-bold mb-8 text-center"
                :class="{ 'text-orange' : heading_colour === 'orange'}"
                >{{ heading }}</h2>
                <div v-html="content">
                
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['heading', 'content', 'link', 'image', 'lottie', 'reverse', 'heading_colour'])
</script>