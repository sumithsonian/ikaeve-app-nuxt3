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
      <BlocksHeading>最近参加した大会</BlocksHeading>
      <BlocksList class="-horizontal">
        <li v-for="tournament of tournaments.data" :key="tournament.id">
          <ElementsCard :item="tournament" />
        </li>
      </BlocksList>
      <BlocksList class="-center">
        <li>
          <ElementsButton to="/tournaments">全ての大会をみる</ElementsButton>
        </li>
      </BlocksList>
    </template>
    <template v-if="team.type === 'organizer'">
      <BlocksHeading>主催大会</BlocksHeading>
      <BlocksList class="-horizontal">
        <li v-for="tournament of tournaments.data" :key="tournament.id">
          <ElementsCard :item="tournament" />
        </li>
      </BlocksList>
      <BlocksHeading>最近開催した大会</BlocksHeading>
      <BlocksList class="-horizontal">
        <li v-for="tournament of tournaments.data" :key="tournament.id">
          <ElementsCard :item="tournament" />
        </li>
      </BlocksList>
      <BlocksList class="-center">
        <li>
          <ElementsButton to="/teams/1/tournaments"
            >全ての大会をみる</ElementsButton
          >
        </li>
      </BlocksList>
      <BlocksHeading>所属メンバー</BlocksHeading>
      <ProjectsListsPlayers :items="players.data" />
    </template>
  </div>
</template>

<script setup>
const title = 'チーム詳細'
const players = await $fetch('/api/users')
const tournaments = await $fetch('/api/tournaments')

useHead({
  title: title,
})
</script>

<script>
export default {
  props: {
    team: { type: Object, required: true },
  },
}
</script>
