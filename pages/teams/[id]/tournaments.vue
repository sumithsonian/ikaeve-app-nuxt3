<template>
  <div>
    <BlocksHeading>{{ title }}・2</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const props = defineProps({
  team: Object,
})
const team = props.team
const title = team.type === 'player' ? 'エントリ大会' : '主催大会'
const tournaments = (await $fetch('/api/tournaments')).data

useHead({
  title: `${title}｜${team.name}`,
})
</script>
