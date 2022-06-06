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
      <ProjectsListsPlayers :items="players" />
      <BlocksHeading>最近のエントリ大会</BlocksHeading>
      <ProjectsCardsTournament :items="tournaments" class="-scroll" />
      <BlocksList class="-center">
        <li>
          <ElementsButton :to="`/teams/${team.id}/tournaments`"
            >全ての大会をみる</ElementsButton
          >
        </li>
      </BlocksList>
    </template>
    <template v-if="team.type === 'organizer'">
      <template v-if="false">
        <BlocksHeading>主催大会シリーズ</BlocksHeading>
        <ProjectsCardsTournament :items="tournaments" class="-scroll" />
      </template>
      <BlocksHeading>最近の主催大会</BlocksHeading>
      <ProjectsCardsTournament :items="tournaments" class="-scroll" />
      <BlocksList class="-center">
        <li>
          <ElementsButton :to="`/teams/${team.id}/tournaments`"
            >全ての大会をみる</ElementsButton
          >
        </li>
      </BlocksList>
      <BlocksHeading>所属メンバー</BlocksHeading>
      <ProjectsListsPlayers :items="players" kind="list" />
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  team: Object,
})
const team = props.team
const title = team.name
const players = (await $fetch('/api/users')).data
const tournaments = (await $fetch('/api/tournaments')).data

useHead({
  title: title,
})
</script>
