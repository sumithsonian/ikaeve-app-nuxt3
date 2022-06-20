<template>
  <div>
    <BlocksIndexNav />
    <section v-for="(teams, i) of teamsByBlock" :key="i">
      <BlocksHeading>{{ teams.block }}ブロック</BlocksHeading>
      <ProjectsListsRoundRobin :teams="teams.teams" />
      <BlocksParagraph class="-right"
        ><ElementsButton @click="modalState = true" class="-link"
          >ルールをみる</ElementsButton
        ></BlocksParagraph
      >
    </section>
    <BlocksInformation>
      <BlocksList class="-horizontal -center">
        <li>
          <ElementsButton>シャッフルし直す</ElementsButton>
        </li>
        <li>
          <ElementsButton class="-primary">組み合わせを決定する</ElementsButton>
        </li>
      </BlocksList>
    </BlocksInformation>
  </div>
</template>

<script setup>
const modalState = useTournamentRuleModalState()
const route = useRoute()
const title = '予選'
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
