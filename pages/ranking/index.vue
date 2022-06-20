<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersRanking v-model="query" />
    <ProjectsListsPlayers :items="players.data" kind="ranking" />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()

const route = useRoute()
const query = reactive({
  game_title: route.query.game_title || null,
  year: route.query.year || null,
  season: route.query.season || null,
})

const { data: players } = await $fetch2(`/api/users`, query)

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

const title = '2022初春シーズンランキング'
useHead({
  title: title,
})
</script>
