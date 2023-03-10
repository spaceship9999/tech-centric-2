<template>
    <div class="bg-dark-green pb-20">
        <div class="container">
        <div class="flex items-center">
            <div class="pt-[240px] max-w-[610px] leading-none font-bold font-metropolis text-pale-yellow">
                <h1 class="t-64 mb-10">{{ heading }}</h1>
                <div class="t-24" v-html="subheading">
                </div>
            </div>
            <div>
                <dotlottie-player :src="lottie.url" autoplay loop />
            </div>
        </div>
    </div>
    </div>
   
</template>

<script setup>
const props = defineProps(['heading', 'image', 'subheading', 'lottie']);
console.log(props.lottie.value)
</script>