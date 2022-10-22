<template>
  <div>
    <BlocksHero
      :name="tournamentSeries.data.name"
      :background-image-url="tournamentSeries.data.background_image_url"
      :detail-url="`/tournament-series/${tournamentSeries.data.id}`"
      :is-owner="tournamentSeries.data.is_owner"
    />
    <BlocksHeading>大会シリーズ概要</BlocksHeading>
    <BlocksParagraph>{{ tournamentSeries.data.description }}</BlocksParagraph>
    <BlocksHeading>大会シリーズ詳細</BlocksHeading>
    <BlocksTable>
      <template #tbody>
        <tr>
          <th>ティア</th>
          <td>{{ tournamentSeries.data.tear }}</td>
        </tr>
      </template>
    </BlocksTable>
    <BlocksHeading>大会一覧</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments.data" />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()
const { data: tournamentSeries } = await $fetch2(
  `/tournaments/${route.params.id}`,
)
const { data: tournaments } = await $fetch2(
  `/tournaments/${route.params.id}/tournaments`,
)

const title = tournamentSeries.value.data.name
useHead({
  title: title,
})
</script>
