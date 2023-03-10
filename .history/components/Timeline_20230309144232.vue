<template>
    <div class="container">
        <div class="flex gap- relative overflow-auto" ref="scrollEl">
            <div class="bar h-[700px] sticky top-0 w-5"></div>
            <div class="h-full">
                <div class="flex flex-col lg:flex-row" v-for="timeline_item in timeline">
                    <div>
                        <img v-if="timeline_item.image" class="" :src="timeline_item.image.url" :alt="timeline_item.image.alt"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps(['timeline'])
const scrollEl = ref(null);
const scroll = useScroll(scrollEl);


</script>