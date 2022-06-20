<template>
  <div>
    <template v-if="isLoggedIn">
      <BlocksHeading>主催大会</BlocksHeading>
      <ProjectsCardsTournament :items="tournaments.data" class="-scroll" />
      <BlocksHeading>主催大会シリーズ</BlocksHeading>
      <ProjectsCardsTournamentSeries
        :items="tournamentSeries.data"
        class="-scroll"
      />
      <BlocksHeading>エントリ中の大会</BlocksHeading>
      <ProjectsCardsTournament :items="tournaments.data" class="-scroll" />
    </template>
    <template v-else>
      <TheHero />
      <BlocksHeading>募集中の大会</BlocksHeading>
      <ProjectsCardsTournament :items="tournaments.data" class="-scroll" />
      <BlocksList class="-center">
        <li>
          <ElementsButton to="/tournaments/?status=recruiting"
            >全ての大会をみる</ElementsButton
          >
        </li>
      </BlocksList>
      <BlocksHeading>開催中の大会</BlocksHeading>
      <ProjectsCardsTournament :items="tournaments.data" class="-scroll" />
      <BlocksList class="-center">
        <li>
          <ElementsButton to="/tournaments/?status=ongoing"
            >全ての大会をみる</ElementsButton
          >
        </li>
      </BlocksList>
    </template>
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const { data: tournaments } = await $fetch2('/api/tournaments', { per_page: 5 })
const { data: tournamentSeries } = await $fetch2('/api/tournament-series', { per_page: 5 })
const isLoggedIn = useIsLoggedInState()
useHead({
  title: 'イカイベ',
  titleTemplate: null,
})
</script>
