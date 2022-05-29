<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersRanking />
    <ProjectsListsPlayers :items="players.data" kind="ranking" />
  </div>
</template>

<script setup>
const title = '2022 - 春シーズンランキング'
useHead({
  title: title,
})
const players = await $fetch('/api/users')
</script>
