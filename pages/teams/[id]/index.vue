<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTeam />
    <BlocksHeading>チーム/団体概要</BlocksHeading>
    <BlocksParagraph
      >紹介文がはいります。紹介文がはいります。紹介文がはいります。紹介文がはいります。</BlocksParagraph
    >
    <template v-if="true">
      <BlocksHeading>戦績</BlocksHeading>
      <BlocksTable>
        <template #tbody>
          <tr>
            <th>今シーズン</th>
            <td>1000ポイント</td>
          </tr>
          <tr>
            <th>年間</th>
            <td>1000ポイント</td>
          </tr>
        </template>
      </BlocksTable>
      <BlocksHeading>所属メンバー</BlocksHeading>
      <ProjectsListsPlayers :items="players.data" />
      <BlocksHeading>最近参加した大会</BlocksHeading>
      <BlocksList class="-horizontal">
        <li><ElementsCard /></li>
        <li><ElementsCard /></li>
      </BlocksList>
      <BlocksList class="-center">
        <li>
          <ElementsButton to="/tournaments">全ての大会をみる</ElementsButton>
        </li>
      </BlocksList>
    </template>
    <template v-else>
      <BlocksHeading>主催大会</BlocksHeading>
      <BlocksList class="-horizontal">
        <li><ElementsCard /></li>
        <li><ElementsCard /></li>
      </BlocksList>
      <BlocksHeading>最近開催した大会</BlocksHeading>
      <BlocksList class="-horizontal">
        <li><ElementsCard /></li>
        <li><ElementsCard /></li>
      </BlocksList>
      <BlocksList class="-center">
        <li>
          <ElementsButton to="/teams/1/tournaments">全ての大会をみる</ElementsButton>
        </li>
      </BlocksList>
      <BlocksHeading>所属メンバー</BlocksHeading>
      <ProjectsListsPlayers :items="players.data" />
    </template>
  </div>
</template>

<script setup>
const route = useRoute()
const title = 'チーム詳細'
useHead({
  title: title,
})

const players = await $fetch('/api/users')
</script>
