<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
  </div>
</template>

<script setup>
const title = 'プライバシーポリシー'
useHead({
  title: title,
})
</script>
