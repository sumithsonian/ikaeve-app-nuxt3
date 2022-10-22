<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTournaments />
    <ProjectsFiltersTournamentSeries v-model="query" />
    <ProjectsCardsTournamentSeries :items="tournamentSeries.data" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()

const route = useRoute()
const query = reactive({
  sort: route.query.sort || null,
  page: route.query.page || null,
})

const { data: tournamentSeries } = $fetch2(`/tournaments`)

watch(
  () => query,
  () => search(),
  { deep: true },
)

function search() {
  return navigateTo({
    path: '/tournament-series/',
    query: query,
  })
}

const title = '大会シリーズ一覧'
useHead({
  title: title,
})
</script>
