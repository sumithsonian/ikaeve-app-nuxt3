<template>
  <div>
    <BlocksHeading>試合結果</BlocksHeading>
    <ProjectsListsTeams :items="teams" kind="result" />
    <BlocksHeading>大会詳細</BlocksHeading>
    <BlocksParagraph
      >大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細大会詳細</BlocksParagraph
    >
    <BlocksHeading>大会ルール</BlocksHeading>
    <BlocksParagraph
      >大会ルール大会ルール大会ルール大会ルール大会ルール大会ルール</BlocksParagraph
    >
  </div>
</template>

<script setup>
const route = useRoute()
const title = '大会詳細'
useHead({
  title: title,
})
const teams = (await $fetch('/api/teams')).data
</script>
