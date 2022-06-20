<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFormsTournamentSeries />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '大会シリーズ作成'
useHead({
  title: title,
})
</script>
