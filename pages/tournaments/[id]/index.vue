<template>
  <div>
    <BlocksHeading>試合結果</BlocksHeading>
    <ProjectsListsTeams :items="teams" kind="result" />
    <BlocksHeading>大会概要</BlocksHeading>
    <BlocksTable>
      <template #tbody>
        <tr>
          <th>大会名</th>
          <td>{{ tournament.name }}</td>
        </tr>
        <tr>
          <th>募集期間</th>
          <td>{{ tournament.started_at }} 〜 {{ tournament.ended_at }}</td>
        </tr>
        <tr>
          <th>開催日時</th>
          <td>{{ tournament.opened_at }} 〜 {{ tournament.closed_at }}</td>
        </tr>
        <tr>
          <th>募集チーム</th>
          <td>
            {{ tournament.team_num_min }} 〜
            {{ tournament.team_num_max }}（1チーム：{{
              tournament.member_num
            }}名）
          </td>
        </tr>
        <tr>
          <th>主催</th>
          <td>{{ tournament.team.name }}</td>
        </tr>
        <tr>
          <th>配信</th>
          <td></td>
        </tr>
      </template>
    </BlocksTable>

    <BlocksHeading>大会詳細</BlocksHeading>
    <BlocksParagraph>{{ tournament.description }}</BlocksParagraph>
    <BlocksHeading>大会ルール</BlocksHeading>
    <BlocksParagraph
      >大会ルール大会ルール大会ルール大会ルール大会ルール大会ルール</BlocksParagraph
    >
  </div>
</template>

<script setup>
const route = useRoute()
const title = '大会詳細'
useHead({
  title: title,
})
const teams = (await $fetch('/api/teams')).data
</script>

<script>
export default {
  props: {
    tournament: { type: Object, required: true },
  },
}
</script>
