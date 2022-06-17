<template>
  <div>
    <BlocksHero
      :name="tournamentSeries.name"
      :background-image-url="tournamentSeries.background_image_url"
      :detail-url="`/tournament-series/${tournamentSeries.id}`"
      :is-owner="team.is_owner"
    />
    <BlocksHeading>大会シリーズ概要</BlocksHeading>
    <BlocksParagraph>{{ tournamentSeries.description }}</BlocksParagraph>
    <BlocksHeading>大会シリーズ詳細</BlocksHeading>
    <BlocksTable>
      <template #tbody>
        <tr>
          <th>ティア</th>
          <td>松竹梅</td>
        </tr>
      </template>
    </BlocksTable>
    <BlocksHeading>大会一覧</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments" />
  </div>
</template>

<script setup>
const route = useRoute()
const tournamentSeries = (
  await $fetch(`/api/tournament-series/${route.params.id}`)
).data
const tournaments = (await $fetch('/api/tournaments')).data

const title = tournamentSeries.name
useHead({
  title: title,
})
</script>
