<template>
    <section :class="{'space-y-5' : props.padding === '1.25rem', 'space-y-40' : !props.padding}">
        <div v-for="section in props.flexible_content">
            
        </div>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps(['flexible_content', 'padding']);
</script>