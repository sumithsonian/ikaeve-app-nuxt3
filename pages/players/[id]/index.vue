<template>
  <div>
    <BlocksHeading>プロフィール</BlocksHeading>
    <BlocksParagraph>{{ player.comment }}</BlocksParagraph>
    <BlocksHeading>戦績</BlocksHeading>
    <BlocksTable>
      <template #tbody>
        <tr>
          <th>今シーズン</th>
          <td>{{ player.points.season }}ポイント</td>
        </tr>
        <tr>
          <th>年間</th>
          <td>{{ player.points.annual }}ポイント</td>
        </tr>
      </template>
    </BlocksTable>
    <BlocksHeading>所属チーム/団体</BlocksHeading>
    <ProjectsListsTeams :items="teams" />
    <BlocksHeading>最近エントリした大会</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments" class="-scroll" />
    <BlocksList class="-center">
      <li>
        <ElementsButton :to="`/players/${player.id}/entered-tournaments`"
          >全ての大会をみる</ElementsButton
        >
      </li>
    </BlocksList>
  </div>
</template>

<script setup>
const route = useRoute()
const title = 'プレイヤー詳細'
useHead({
  title: title,
})
const tournaments = (await $fetch('/api/tournaments')).data
const teams = (await $fetch('/api/teams')).data
</script>

<script>
export default {
  props: {
    player: { type: Object, required: true },
  },
}
</script>
