<template>
    <div class="bg-dark-green pb-20">
        <div class="container">
        <div class="flex">
            <div class="pt-[240px] max-w-[610px] leading-none font-bold font-metropolis text-pale-yellow">
                <h1 class="t-64 mb-10">{{ heading }}</h1>
                <div class="t-24" v-html="subheading">
                </div>
            </div>
            <div>
                <dotlottie-player src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json" autoplay loop />
            </div>
        </div>
    </div>
    </div>
   
</template>

<script setup>
const props = defineProps(['heading', 'image', 'subheading', 'lottie']);
console.log(props.lottie.value)
</script>