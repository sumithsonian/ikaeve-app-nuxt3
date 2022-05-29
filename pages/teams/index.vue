<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersTournament />
    <ProjectsListsTeams :items="teams.data" />
  </div>
</template>

<script setup>
const title = 'チーム/団体一覧'
useHead({
  title: title,
})
const teams = await $fetch('/api/teams')
</script>
