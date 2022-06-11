<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTournaments />
    <ProjectsFiltersTournament v-model="query" />
    <ProjectsCardsTournament :items="tournaments" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const title = '大会一覧'
useHead({
  title: title,
})

const route = useRoute()
const query = reactive({
  status: route.query.status || null,
  sort: route.query.sort || null,
  page: route.query.page || null,
})

const tournaments = (await $fetch('/api/tournaments')).data

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
</script>
