<template>
    <div class="bg-dark-green pt-[240px] lg:pb-20">
        <div class="container">
        <div class="flex flex-col lg:flex-row items-center">
            <div class="max-w-[610px] leading-none font-bold font-metropolis text-pale-yellow">
                <Presence>
                    <Motion :initial="{opacity: 0, y: '200px'}"
                        :animate="{opacity: 1, y: 0}"
                        :transition="{duration: 1.2, easing: [.12, .46, .71, .94]}"
                    >
                        <h1 class="text-center lg:text-left t-64 mb-4 lg:mb-10">{{ heading }}</h1>
                    </Motion>
                </Presence>
                <div class="t-24 text-center lg:text-left" v-html="subheading">
                </div>
                <div class="mt-8 flex justify-center lg:justify-start">
                    <NuxtLink class="inline-block bg-orange text-center min-w-[250px] rounded-full py-5 px-2 hover:scale-[1.2] duration-700 ease-[.12, .46, .71, .94]" :to="link.url" >{{ link.title }}</NuxtLink>
                </div>
                
            </div>
            <div class="min-h-[400px] h-[400px]">
                <dotlottie-player :src="lottie.url" autoplay loop />
            </div>
        </div>
    </div>
    </div>
   
</template>

<script setup>
import { Presence, Motion } from "@motionone/vue";
const props = defineProps(['heading', 'image', 'subheading', 'lottie', 'link']);
</script>