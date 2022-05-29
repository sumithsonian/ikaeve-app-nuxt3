<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersTournament />
    <BlocksList class="-horizontal">
      <li v-for="tournament of tournaments.data" :key="tournament.id">
        <ElementsCard :item="tournament" />
      </li>
    </BlocksList>
  </div>
</template>

<script setup>
const title = '大会一覧'
useHead({
  title: title,
})
const tournaments = await $fetch('/api/tournaments')
</script>
