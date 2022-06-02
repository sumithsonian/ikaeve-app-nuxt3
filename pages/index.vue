<template>
  <div>
    <TheHero />
    <BlocksHeading>募集中の大会</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments" class="-scroll" />
    <BlocksList class="-center">
      <li>
        <ElementsButton to="/tournaments">全ての大会をみる</ElementsButton>
      </li>
    </BlocksList>
    <BlocksHeading>開催中の大会</BlocksHeading>
    <ProjectsCardsTournament :items="tournaments" class="-scroll" />
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

const tournaments = (await $fetch('/api/tournaments')).data
</script>
