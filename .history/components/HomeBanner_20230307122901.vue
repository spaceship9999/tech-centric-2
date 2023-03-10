<template>
    <div class="bg-dark-green pb-20">
        <div class="container">
        <div class="flex">
            <div class="pt-[240px] max-w-[620px] leading-none font-bold font-metropolis text-pale-yellow">
                <h1 class="t-64 ">{{ heading }}</h1>
            </div>
    
        </div>
    </div>
    </div>
   
</template>

<script setup>
const props = defineProps(['heading', 'image']);
</script>