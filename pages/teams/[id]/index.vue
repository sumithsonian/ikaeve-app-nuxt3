<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTeam />
  </div>
</template>

<script setup>
const route = useRoute()
const title = 'チーム詳細'
useHead({
  title: title,
})
</script>
