<template>
  <div>
    <BlocksHeading>{{ title }}・{{ tournaments.data.length }}</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments.data" />
    <ProjectsPagination />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()
const props = defineProps({
  team: Object,
})
const team = props.team
const title = team.type === 'player' ? 'エントリ大会' : '主催大会'
const { data: tournaments } = await $fetch2(
  `/api/teams/${route.params.id}/tournaments`,
)
useHead({
  title: `${title}｜${team.name}`,
})
</script>
