<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersTournament />
    <ProjectsCardsTournament :items="tournaments" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const title = '大会一覧'
useHead({
  title: title,
})
const tournaments = (await $fetch('/api/tournaments')).data
</script>
