<template>
    <div class="container">
        <div class="flex gap-x-14 relative overflow-auto" ref="scrollEl">
            <div class="bar h-[calc(100vh-100px)] sticky top-0 w-5 bg-white rounded-full"></div>
            <ul class="h-full">
                <li class="grid grid-cols-1 lg:grid-cols-2" v-for="timeline_item in timeline">
                    <div>
                        <img v-if="timeline_item.image" class="" :src="timeline_item.image.url" :alt="timeline_item.image.alt"/>
                    </div>
                    <div>
                        <h2>{{ timeline_item?.date }}</h2>
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