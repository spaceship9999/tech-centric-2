<template>
        <div :class="{'bg-pink': background === 'pink',  'bg-purple': background === 'purple'}" 
        class="bg-dark-green pt-40 lg:pt-[240px] lg:pb-20">
            <div class="container">
                <div
                :class="[{reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}]"
                class="flex flex-col-reverse lg:flex-row items-center">
                    <div class="min-h-[400px] h-[400px] lg:w-1/2">
                        <dotlottie-player class="w-full" :src="lottie.url" autoplay loop />
                    </div>
                    <div class="max-w-[610px] leading-none font-bold font-metropolis text-pale-yellow">
                        <Presence>
                            <Motion :initial="{ opacity: 0, x: '-200px', scale: 0.8 }" :animate="{ opacity: 1, x: 0, scale: 1 }"
                                :transition="{ duration: 1.2, easing: [.12, .46, .71, .94] }">
                                <h1 class="text-center lg:text-left t-64 mb-4 lg:mb-10">{{ heading }}</h1>
                            </Motion>
                        </Presence>
                        <div class="t-24 text-center lg:text-left" v-html="content">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import { Presence, Motion } from "@motionone/vue";
const props = defineProps(['heading', 'image', 'content', 'lottie', 'link', 'background', 'reverse']);
</script>