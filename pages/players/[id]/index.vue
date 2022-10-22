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
    <ProjectsListsTeams :items="teams.data" />
    <BlocksHeading>最近エントリした大会</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments.data" class="-scroll" />
    <BlocksList class="-center">
      <li>
        <ElementsButton :to="`/players/${player.id}/tournaments`"
          >全ての大会をみる</ElementsButton
        >
      </li>
    </BlocksList>
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()
const { data: tournaments } = await $fetch2(
  `/api/users/${route.params.id}/tournaments`,
  {
    per_page: 10,
  },
)
const { data: teams } = $fetch2(`/users/${route.params.id}/teams`)
const title = 'プレイヤー詳細'
useHead({
  title: title,
})
</script>

<script>
export default {
  props: {
    player: { type: Object, required: true },
  },
}
</script>
