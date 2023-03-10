<template>
    <div class="container">
        <div class="flex gap-x-14 relative overflow-auto" ref="scrollEl">
            <div class="bar h-[calc(100vh-100px)] sticky top-0 w-5 bg-white rounded-full"></div>
            <ul class="h-full text-white">
                <li class="flex flex-col gap-8"
                :class="{'lg:flex-row' : !(index % 2), 'lg:flex-row-reverse': index % 2}"
                 v-for="(timeline_item, index) in timeline">
                    <div>
                        <img v-if="timeline_item.image" class="" :src="timeline_item.image.url" :alt="timeline_item.image.alt"/>
                    </div>
                    <div class="mt-auto">
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
const scroll = useScroll(scrollEl);


</script>