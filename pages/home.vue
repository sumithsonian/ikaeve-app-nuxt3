<template>
  <div>
    <BlocksHeading>主催大会</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments.data" class="-scroll" />
    <BlocksHeading>主催大会シリーズ</BlocksHeading>
    <ProjectsCardsTournamentSeries
      :items="tournamentSeries.data"
      class="-scroll"
    />
    <BlocksHeading>エントリ中の大会</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments2.data" class="-scroll" />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const me = useMeState()

const { data: tournaments } = await $fetch2(`/users/${me.value.id}/tournaments`, {
  per_page: 10,
})
const { data: tournaments2 } = await $fetch2(`/users/${me.value.id}/tournaments`, {
  per_page: 10,
})
const { data: tournamentSeries } = await $fetch2(`/users/${me.value.id}/tournament-series`, {
  per_page: 10,
})

useHead({
  title: 'イカイベ',
  titleTemplate: null,
})
</script>
