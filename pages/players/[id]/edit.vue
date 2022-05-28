<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
  </div>
</template>

<script setup>
const route = useRoute()
const title = 'プレイヤーの編集'
useHead({
  title: title,
})
</script>
