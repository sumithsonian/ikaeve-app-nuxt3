<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
  </div>
</template>

<script setup>
const route = useRoute()
const title = 'チーム作成'
useHead({
  title: title,
})
</script>
