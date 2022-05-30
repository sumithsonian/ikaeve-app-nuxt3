<template>
  <div>
    <BlocksIndexNav />
    <section v-for="(teams, i) of teamsByBlock" :key="i">
      <BlocksHeading>{{ teams.block }}ブロック</BlocksHeading>
      <ProjectsListsRoundRobin :teams="teams.teams" />
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const title = '予選｜大会'
useHead({
  title: title,
})
const teams = (
  await $fetch(`/api/tournaments/${route.params.id}/matchs_by_team`)
).data
</script>

<script>
export default {
  props: {
    tournament: { type: Object, required: true },
  },
  computed: {
    blocks() {
      const blocks = []
      this.teams.forEach((team) => blocks.push(team.block))
      return [...new Set(blocks)] // 重複削除
    },
    teamsByBlock() {
      const teamsByBlock = []
      this.blocks.forEach((block) => {
        teamsByBlock.push({
          block: block,
          teams: this.teams.filter((team) => team.block === block),
        })
      })
      return teamsByBlock
    },
  },
}
</script>
