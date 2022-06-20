<template>
  <div>
    <BlocksHeading>チーム/団体概要</BlocksHeading>
    <BlocksParagraph>{{ team.comment }}</BlocksParagraph>
    <template v-if="team.type === 'player'">
      <BlocksHeading>戦績</BlocksHeading>
      <BlocksTable>
        <template #tbody>
          <tr>
            <th>今シーズン</th>
            <td>{{ team.points.season }}ポイント</td>
          </tr>
          <tr>
            <th>年間</th>
            <td>{{ team.points.annual }}ポイント</td>
          </tr>
        </template>
      </BlocksTable>
      <BlocksHeading>所属メンバー</BlocksHeading>
      <ProjectsListsPlayers :items="players.data" />
      <BlocksHeading>最近のエントリ大会</BlocksHeading>
      <ProjectsCardsTournament :items="tournaments.data" class="-scroll" />
      <BlocksList class="-center">
        <li>
          <ElementsButton :to="`/teams/${team.id}/tournaments`"
            >全ての大会をみる</ElementsButton
          >
        </li>
      </BlocksList>
    </template>
    <template v-if="team.type === 'organizer'">
      <BlocksHeading>主催大会シリーズ</BlocksHeading>
      <ProjectsCardsTournamentSeries
        :items="tournamentSeries.data"
        class="-scroll"
      />
      <BlocksHeading>最近の主催大会</BlocksHeading>
      <ProjectsCardsTournament :items="tournaments.data" class="-scroll" />
      <BlocksList class="-center">
        <li>
          <ElementsButton :to="`/teams/${team.id}/tournaments`"
            >全ての大会をみる</ElementsButton
          >
        </li>
      </BlocksList>
      <BlocksHeading>所属メンバー</BlocksHeading>
      <ProjectsListsPlayers :items="players.data" kind="list" />
    </template>
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()
const props = defineProps({
  team: Object,
})
const team = props.team
const { data: players } = await $fetch2(`/api/teams/${route.params.id}/users`)
const { data: tournaments } = await $fetch2(
  `/api/teams/${route.params.id}/tournaments`,
  { per_page: 10 },
)
const { data: tournamentSeries } = await $fetch2(
  `/api/teams/${route.params.id}/tournament-series`,
  { per_page: 10 },
)

useHead({
  title: team.name,
})
</script>
