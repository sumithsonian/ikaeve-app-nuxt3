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
const { $fetch2 } = useNuxtApp()
const modalState = useTournamentRuleModalState()
const route = useRoute()
const { data: teams } = await $fetch2(
  `/events/${route.params.id}/matchs_by_team`,
)
const title = '予選'
useHead({
  title: title,
})
</script>

<script>
export default {
  props: {
    tournament: { type: Object, required: true },
  },
  computed: {
    blocks() {
      const blocks = []
      this.teams.data.forEach((team) => blocks.push(team.block))
      return [...new Set(blocks)] // 重複削除
    },
    teamsByBlock() {
      const teamsByBlock = []
      this.blocks.forEach((block) => {
        teamsByBlock.push({
          block: block,
          teams: this.teams.data.filter((team) => team.block === block),
        })
      })
      return teamsByBlock
    },
  },
}
</script>
