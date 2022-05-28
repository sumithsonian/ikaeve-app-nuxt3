<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
  </div>
</template>

<script setup>
const title = 'プレイヤー一覧'
useHead({
  title: title,
})
</script>
