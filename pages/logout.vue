<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
  </div>
</template>

<script setup>
const title = 'ログアウト'
useHead({
  title: title,
})
</script>
