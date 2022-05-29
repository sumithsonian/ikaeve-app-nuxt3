<template>
  <div>
    <BlocksHeading>最近参加した大会・2</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments" />
  </div>
</template>

<script setup>
const title = '開催した大会｜チーム詳細'
useHead({
  title: title,
})
const tournaments = (await $fetch('/api/tournaments')).data
</script>

<script>
export default {
  props: {
    team: { type: Object, required: true },
  },
}
</script>
