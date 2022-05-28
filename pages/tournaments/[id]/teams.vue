<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTournament />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '参加チーム一覧｜大会'
useHead({
  title: title,
})
</script>
