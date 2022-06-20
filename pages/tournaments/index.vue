<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTournaments />
    <ProjectsFiltersTournament v-model="query" />
    <ProjectsCardsTournament :items="tournaments.data" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()

const query = reactive({
  game_title: route.query.game_title || null,
  status: route.query.status || null,
  sort: route.query.sort || null,
  page: route.query.page || null,
})

const { data: tournaments } = await $fetch2('/api/tournaments', query)

watch(
  () => query,
  () => search(),
  { deep: true },
)

function search() {
  return navigateTo({
    path: '/tournaments/',
    query: query,
  })
}

const title = '大会一覧'
useHead({
  title: title,
})
</script>
