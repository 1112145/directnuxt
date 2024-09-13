<template>
  <NuxtLayout>
    <NuxtPage :pageData="pageData"></NuxtPage>
  </NuxtLayout>
</template>
<script lang="ts" setup>
import usePageData from './composable/usePageData';

const { $global } = useNuxtApp();

const route = useRoute();

const pageData = await usePageData(route.params.slug as string);

useSeoMeta({
  title: $global?.site_name || 'Default Site Name',
  description: $global?.description || 'Default Site Description',
  ogImage: $global?.og_image || pageData?.seo?.og_image || 'Default OG Image',
  ogTitle: $global?.og_title || pageData?.seo?.og_title || 'Default OG Title',
  ogDescription: $global?.og_description || pageData?.seo?.og_description || 'Default OG Description',
})

</script>