<template>
    <div class="container py-24">
        <div class="flex gap-x-14 relative" ref="scrollEl">
            <div class="bar h-[calc(100vh-100px)] sticky top-[100px] w-5 min-w-[1.25rem] bg-white rounded-full"></div>
            <ul class="h-full text-white flex flex-col gap-y-8 lg:gap-y-20">
                <li class="flex flex-col items-end gap-x-8 gap-y-4"
                :class="{'lg:flex-row' : !(index % 2), 'lg:flex-row-reverse': index % 2}"
                 v-for="(timeline_item, index) in timeline">
                    <div class="w-full lg:w-1/2 aspect-[340/200]">
                        <img v-if="timeline_item.image" class="w-full h-full object-cover object-center" :src="timeline_item.image.url" :alt="timeline_item.image.alt"/>
                    </div>
                    <div class="mt-auto lg:w-1/2">
                        <h2 class="t-64 font-bold">{{ timeline_item?.date }}</h2>
                        <div class="t-24" v-html="timeline_item?.content"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps(['timeline'])
const scrollEl = ref(null);
const { x, y, top, right, bottom, left, width, height } = useElementBounding(scrollEl);
const { width: window_width, height : window_height } = useWindowSize()

const scrollbarContainerHeight = computed(() => {
    if ()
})

</script>