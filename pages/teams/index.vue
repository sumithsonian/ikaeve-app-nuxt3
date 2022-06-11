<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersTeam v-model="query" />
    <ProjectsListsTeams :items="teams" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const title = 'チーム/団体一覧'
useHead({
  title: title,
})

const route = useRoute()
const query = reactive({
  is_recruited: route.query.is_recruited || null,
  atmospheres: route.query.atmospheres || null,
  team_kind: route.query.team_kind || null,
  sort: route.query.sort || null,
  page: route.query.page || null,
})

const teams = (await $fetch('/api/teams')).data

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
</script>
