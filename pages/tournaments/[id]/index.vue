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
          <th>募集数</th>
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
    <BlocksTable>
      <template #tbody>
        <tr v-if="tournament.rules.qualifying">
          <th>予選</th>
          <td>
            試合形式：{{ tournament.rules.qualifying.system }}<br />
            通過順位：{{ tournament.rules.qualifying.pass_order }}<br />
            先取点：{{ tournament.rules.qualifying.first_to }}<br />
            <template v-for="(rule, key) of tournament.rules.qualifying.rules">
              第{{ key }}ゲーム：{{ rule }}<br />
            </template>
          </td>
        </tr>
        <tr v-if="tournament.rules.finals">
          <th>本戦</th>
          <td>
            試合形式：{{ tournament.rules.finals.system }}<br />
            試合形式：{{ tournament.rules.finals.system }}<br />
            先取点：{{ tournament.rules.finals.first_to }}<br />
            <template v-for="(rule, key) of tournament.rules.finals.rules">
              第{{ key }}ゲーム：{{ rule }}<br />
            </template>
          </td>
        </tr>
        <tr v-if="tournament.rules.final">
          <th>決勝戦</th>
          <td>
            先取点：{{ tournament.rules.final.first_to }}<br />
            <template v-for="(rule, key) of tournament.rules.final.rules">
              第{{ key }}ゲーム：{{ rule }}<br />
            </template>
          </td>
        </tr>
      </template>
    </BlocksTable>
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
