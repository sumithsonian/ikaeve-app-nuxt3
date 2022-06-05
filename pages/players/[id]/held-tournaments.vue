<template>
  <div>
    <BlocksHeading>開催した大会・5</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '開催した大会｜プレイヤー詳細'
useHead({
  title: title,
})
const tournaments = (await $fetch('/api/tournaments')).data
</script>
