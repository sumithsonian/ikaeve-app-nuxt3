<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
  </div>
</template>

<script setup>
const title = 'シリーズ一覧'
useHead({
  title: title,
})
</script>
