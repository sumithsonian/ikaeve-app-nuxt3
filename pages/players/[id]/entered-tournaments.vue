<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsPlayer />
    <BlocksHeading>参加した大会・5</BlocksHeading>
    <BlocksList class="-horizontal">
      <li v-for="tournament of tournaments.data" :key="tournament.id">
        <ElementsCard :item="tournament" />
      </li>
    </BlocksList>
  </div>
</template>

<script setup>
const route = useRoute()
const title = '参加した大会｜プレイヤー詳細'
useHead({
  title: title,
})
const tournaments = await $fetch('/api/tournaments')
</script>
