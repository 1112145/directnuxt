<template>
    <Widgets :pageData="pageData" />
 </template>
 <script lang="ts" setup>
 
 const pageData: any = useAttrs().pageData;
 
 </script>