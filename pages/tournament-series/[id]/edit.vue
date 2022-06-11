<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFormsTournamentSeries kind="edit" />
  </div>
</template>

<script setup>
const title = '大会シリーズの編集'
useHead({
  title: title,
})
</script>
