<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersPlayer v-model="query" />
    <ProjectsListsPlayers :items="players" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const title = 'プレイヤー一覧'
useHead({
  title: title,
})

const route = useRoute()
const query = reactive({
  sort: route.query.sort || null,
  page: route.query.page || null,
})

const players = (await $fetch('/api/users')).data
</script>
