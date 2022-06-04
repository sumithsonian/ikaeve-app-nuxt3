<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersPlayer />
    <ProjectsListsPlayers :items="players" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const title = 'プレイヤー一覧'
useHead({
  title: title,
})

const players = (await $fetch('/api/users')).data
</script>
