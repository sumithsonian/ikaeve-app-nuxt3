<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersRanking v-model="query" />
    <ProjectsListsPlayers :items="players" kind="ranking" />
  </div>
</template>

<script setup>
const title = '2022 - 春シーズンランキング'
useHead({
  title: title,
})

const route = useRoute()
const query = reactive({
  game_title: route.query.game_title || null,
  year: route.query.year || null,
  season: route.query.season || null,
})

const players = (await $fetch('/api/users')).data

watch(
  () => query,
  () => search(),
  { deep: true },
)

function search() {
  return navigateTo({
    path: '/ranking/',
    query: query,
  })
}
</script>
