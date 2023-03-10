<template>
    <div class="container">
        <div class="flex" ref="scrollEl">
            <div class="bar"></div>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const scrollEl = ref(null);
const scroll = useScroll(scrollEl);


</script>