<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTournament />
    <BlocksIndexNav />
    <BlocksHeading>勝者サイド</BlocksHeading>
    <BlocksHeading>敗者サイド</BlocksHeading>
  </div>
</template>

<script setup>
const route = useRoute()
const title = '本戦｜大会'
useHead({
  title: title,
})
</script>
