<template>
  <div>
   
  </div>
</template>
<script lang="ts" setup>
  const { $global } = useNuxtApp();

  useSeoMeta({
    title: $global?.site_name || 'Default Site Name',
    description: $global?.description || 'Default Site Description',
  })

</script>