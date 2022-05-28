<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersRanking />
    <ProjectsListsPlayers kind="ranking" />
  </div>
</template>

<script setup>
const title = '2022 - 春シーズンランキング'
useHead({
  title: title,
})
</script>
