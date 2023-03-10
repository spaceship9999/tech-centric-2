<template>
    <div class="container">
        <div class="flex">
            <div class="pt-[240px] max-w-[620px] leading-none font-medium">
                <h1 class="t-64">{{ heading }}</h1>
            </div>
           
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['heading', 'image']);
</script>