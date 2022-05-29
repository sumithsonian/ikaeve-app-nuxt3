<template>
  <div>
    <BlocksHeading>最近参加した大会・2</BlocksHeading>
    <BlocksList class="-horizontal">
      <li v-for="tournament of tournaments.data" :key="tournament.id">
        <ElementsCard :item="tournament" />
      </li>
    </BlocksList>
  </div>
</template>

<script setup>
const title = '開催した大会｜チーム詳細'
useHead({
  title: title,
})
const tournaments = await $fetch('/api/tournaments')
</script>

<script>
export default {
  props: {
    team: { type: Object, required: true },
  },
}
</script>
