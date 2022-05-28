<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
  </div>
</template>

<script setup>
const route = useRoute()
const title = '大会の編集'
useHead({
  title: title,
})
</script>
