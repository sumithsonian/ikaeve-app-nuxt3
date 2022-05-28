<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
  </div>
</template>

<script setup>
const title = 'ご利用規約'
useHead({
  title: title,
})
</script>
