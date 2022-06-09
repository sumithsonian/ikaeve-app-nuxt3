<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
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
  statuses: route.query.statuses || [],
  sort: route.query.sort || null,
  page: route.query.page || null,
})

const tournaments = (await $fetch('/api/tournaments')).data
</script>
