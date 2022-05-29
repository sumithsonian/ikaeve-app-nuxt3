<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersTournament />
    <ProjectsListsPlayers :items="players.data" />
  </div>
</template>

<script setup>
const title = 'プレイヤー一覧'
useHead({
  title: title,
})

const players = await $fetch('/api/users')
</script>
