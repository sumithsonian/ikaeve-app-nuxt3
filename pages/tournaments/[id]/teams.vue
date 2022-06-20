<template>
  <div>
    <ProjectsListsTeams :items="teams.data" kind="list" />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()
const { data: teams } = await $fetch2(`/api/tournaments/${route.params.id}/teams`)

const title = '参加チーム一覧'
useHead({
  title: title,
})
</script>
