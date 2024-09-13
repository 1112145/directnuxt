<template>
    <component v-for="(block, index) in pageData.blocks" :key="index" :is="components[block.collection]"
        :item="block.item" />
</template>
<script lang="ts" setup>

const props = defineProps<{
    pageData: any;
}>();

const pageData = props.pageData;

const components: { [key: string]: any } = {
    HTMLEditor: resolveComponent('HTMLEditor'),
};


</script>
