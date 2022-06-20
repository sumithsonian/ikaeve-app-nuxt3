<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersTeam v-model="query" />
    <ProjectsListsTeams :items="teams.data" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()

const route = useRoute()
const query = reactive({
  is_recruited: route.query.is_recruited || null,
  atmospheres: route.query.atmospheres || null,
  team_kind: route.query.team_kind || null,
  sort: route.query.sort || null,
  page: route.query.page || null,
})

const { data: teams } = await $fetch2('/api/teams', query)

watch(
  () => query,
  () => search(),
  { deep: true },
)

function search() {
  return navigateTo({
    path: '/teams/',
    query: query,
  })
}

const title = 'チーム/団体一覧'
useHead({
  title: title,
})
</script>
