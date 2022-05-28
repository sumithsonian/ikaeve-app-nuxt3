<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersTournament />
    <ProjectsListsPlayers />
  </div>
</template>

<script setup>
const title = 'プレイヤー一覧'
useHead({
  title: title,
})
</script>
