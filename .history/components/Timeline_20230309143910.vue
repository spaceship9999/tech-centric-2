<template>
    <div class="container">
        <div class="flex relative overflow-auto" ref="scrollEl">
            <div class="bar h-[700px] sticky top-0"></div>
            <div class="h-full">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps(['timeline'])
const scrollEl = ref(null);
const scroll = useScroll(scrollEl);


</script>