<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
  </div>
</template>

<script setup>
const route = useRoute()
const title = 'プレイヤー詳細'
useHead({
  title: title,
})
</script>
