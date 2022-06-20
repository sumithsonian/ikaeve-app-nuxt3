<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersPlayer v-model="query" />
    <ProjectsListsPlayers :items="players.data" />
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

const { data: players } = await $fetch2(`/api/users`, query)

watch(
  () => query,
  () => search(),
  { deep: true },
)

function search() {
  return navigateTo({
    path: '/players/',
    query: query,
  })
}

const title = 'プレイヤー一覧'
useHead({
  title: title,
})
</script>
