<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersTournamentSeries v-model="query" />
    <ProjectsCardsTournamentSeries :items="tournamentSeries" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const title = '大会シリーズ一覧'
useHead({
  title: title,
})

const route = useRoute()
const query = {
  sort: route.query.sort || null,
  page: route.query.page || null,
}

const tournamentSeries = (await $fetch('/api/tournament-series')).data
</script>
