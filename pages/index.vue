<template>
  <div>
    <TheHero />
    <BlocksHeading>募集中の大会</BlocksHeading>
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
    <BlocksHeading>開催中の大会</BlocksHeading>
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
  </div>
</template>

<script setup>
useHead({
  title: 'イカイベ',
  titleTemplate: null,
})

const tournaments = await $fetch('/api/tournaments')
</script>
