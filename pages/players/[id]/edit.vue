<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFormsPlayer />
  </div>
</template>

<script setup>
const title = 'プレイヤーの編集'
useHead({
  title: title,
})
</script>
