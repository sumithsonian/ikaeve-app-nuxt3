<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsPlayer />
    <BlocksHeading>プロフィール</BlocksHeading>
    <BlocksParagraph
      >プロフィールプロフィールプロフィールプロフィールプロフィール</BlocksParagraph
    >
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
    <BlocksHeading>最近参加した大会</BlocksHeading>
    <BlocksList class="-horizontal">
      <li v-for="tournament of tournaments.data" :key="tournament.id">
        <ElementsCard :item="tournament" />
      </li>
    </BlocksList>
    <BlocksList class="-center">
      <li>
        <ElementsButton to="/players/1/entred-tournaments"
          >全ての大会をみる</ElementsButton
        >
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
        <ElementsButton to="/players/1/held-tournaments"
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
const tournaments = await $fetch('/api/tournaments')
</script>
