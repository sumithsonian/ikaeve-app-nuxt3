<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsPlayer />
    <BlocksHeading>開催した大会・5</BlocksHeading>
    <BlocksList class="-horizontal">
      <li v-for="tournament of tournaments" :key="tournament.id">
        <ElementsCard :item="tournament" />
      </li>
    </BlocksList>
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
