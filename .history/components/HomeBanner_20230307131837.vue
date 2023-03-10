<template>
    <div class="bg-dark-green pt-[240px] pb-20">
        <div class="container">
        <div class="flex flex-col lg:flex-row items-center">
            <div class="max-w-[610px] leading-none font-bold font-metropolis text-pale-yellow">
                <Presence>
                    <Motion :initial="{opacity: 0, y: '200px'}"
                        :animate="{opacity: 1, y: 0}"
                        :transition="{duration: 1.2, easing: [.12, .46, .97, .91]}"
                    >
                        <h1 class="t-64 mb-10">{{ heading }}</h1>
                    </Motion>
                </Presence>
                
                <div class="t-24" v-html="subheading">
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
const props = defineProps(['heading', 'image', 'subheading', 'lottie']);
</script>