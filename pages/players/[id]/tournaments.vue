<template>
  <div>
    <BlocksHeading>エントリ大会・5</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments.data" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()
const { data: tournaments } = await $fetch2(
  `/api/users/${route.params.id}/tournaments`,
)

useHead({
  title: 'エントリ大会｜プレイヤー詳細',
})
</script>
