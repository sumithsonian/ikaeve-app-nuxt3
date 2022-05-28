<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsPlayer />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '参加した大会｜プレイヤー詳細'
useHead({
  title: title,
})
</script>
