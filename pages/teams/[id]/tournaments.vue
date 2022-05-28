<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTeam />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '開催した大会｜チーム詳細'
useHead({
  title: title,
})
</script>
