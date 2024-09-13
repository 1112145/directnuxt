<template>
    <div v-html="props.item.content"></div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    item: { content: string };
}>();
</script>
