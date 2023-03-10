<template>
    <section :class="{'space-y-5' : props.padding === '1.25rem', '' : !props.padding, ''}">
        <div v-for="section in props.flexible_content">
            <Section v-if="section.acf_fc_layout === 'section'" v-bind="section"></Section>
            <HomeBanner v-if="section.acf_fc_layout === 'home_banner'" v-bind="section"/>
            <TwoColumnsTextMedia v-if="section.acf_fc_layout === 'two_columns_text_media'" v-bind="section"/>
        </div>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps(['flexible_content', 'padding']);
</script>