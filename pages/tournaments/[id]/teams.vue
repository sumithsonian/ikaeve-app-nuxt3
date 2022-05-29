<template>
  <div>
    <ProjectsListsTeams :items="teams.data" kind="list" />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '参加チーム一覧｜大会'
useHead({
  title: title,
})
const teams = await $fetch('/api/teams')
</script>
