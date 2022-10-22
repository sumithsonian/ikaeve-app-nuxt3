<template>
  <div>
    <TheHero />
    <BlocksHeading>募集中の大会</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments.data" class="-scroll" />
    <BlocksList class="-center">
      <li>
        <ElementsButton class="-large" to="/tournaments/?status=recruiting"
          >全ての大会をみる</ElementsButton
        >
      </li>
    </BlocksList>
    <BlocksHeading>開催中の大会</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments2.data" class="-scroll" />
    <BlocksList class="-center">
      <li>
        <ElementsButton class="-large" to="/tournaments/?status=ongoing"
          >全ての大会をみる</ElementsButton
        >
      </li>
    </BlocksList>
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()

const { data: tournaments } = await $fetch2(`/events`, {
  per_page: 10,
})
const { data: tournaments2 } = await $fetch2(`/events`, {
  per_page: 10,
})

useHead({
  title: 'イカイベ',
  titleTemplate: null,
})
</script>
