<template>
    <div class="container" :class="{'py-20 lg:pt-[120px] lg:pb-[200px]' : padding === 'large'}">
        <div class="flex flex-col lg:flex-row itmes-center" :class="{'lg:flex-row-reverse': reverse}">
            <div class="lg:w-1/2 flex relative mb-10 lg:mb-0">
                <Presence >
                    <Motion :initial="{y: '-200px', opacity: 0}"
                    :animate="{ y: '-200px', opacity: 0 }"
                    :transition="{duration: 0.7}">
                        <img v-if="image" class="mx-auto max-w-[300px] lg:max-w-max lg:mr-0" 
                            :src="props.image.url" :alt="props.image.alt"/>
                    </Motion>
                </Presence>
               
                <dotlottie-player v-if="!image" :src="lottie.url" autoplay loop />
            </div>
            <div class="lg:w-1/2 lg:pl-14 flex flex-col justify-center">
                <h2 class="t-64 leading-none font-bold mb-4 lg:mb-8 text-center lg:text-left"
                :class="{ 'text-orange' : heading_colour === 'orange'}"
                >{{ heading }}</h2>
                <div class="text-center lg:text-left t-24 font-medium" v-html="content"></div>
                <div class="mt-8 flex justify-center lg:justify-start">
                    <NuxtLink class="inline-block bg-orange text-white font-bold text-center min-w-[250px] rounded-full py-5 px-2 hover:scale-[1.2] hover:bg-white hover:text-orange duration-700 ease-[cubic-bezier(.12,.46,.71,.94)]" :to="link.url" >{{ link.title }}</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { animate } from '@motionone/dom';
import { Presence } from '@motionone/vue';

const props = defineProps(['heading', 'content', 'link', 'image', 'lottie', 'reverse', 'heading_colour', 'padding'])
</script>