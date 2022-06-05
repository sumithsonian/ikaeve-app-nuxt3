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
const query = {
  page: route.query.page || null,
  sort: route.query.sort || null,
}

const players = (await $fetch('/api/users')).data
</script>
