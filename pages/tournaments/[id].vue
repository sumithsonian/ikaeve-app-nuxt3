<template>
  <div>
    <BlocksHero
      :name="tournament.name"
      :background-image-url="tournament.background_image_url"
      :tags="tournament.tags"
      :detail-url="`/tournaments/${tournament.id}`"
    />
    <ProjectsTabsTournament :id="tournament.id" />
    <NuxtPage :page-key="route.path" :tournament="tournament" />
    <BlocksInformation>
      <BlocksParagraph class="-center">募集チームが揃いました</BlocksParagraph>
      <BlocksList class="-horizontal -center">
        <li>
          <ElementsButton class="-primary">大会を開始する</ElementsButton>
        </li>
      </BlocksList>
    </BlocksInformation>
    <BlocksInformation>
      <BlocksParagraph class="-center"
        >募集チームが定員に達しませんでした</BlocksParagraph
      >
      <BlocksList class="-horizontal -center">
        <li>
          <ElementsButton class="-primary">期限を延ばす</ElementsButton>
        </li>
        <li>
          <ElementsButton class="-primary">大会を中止する</ElementsButton>
        </li>
      </BlocksList>
    </BlocksInformation>
    <BlocksInformation>
      <BlocksList class="-horizontal -center">
        <li>
          <ElementsButton class="-primary"
            >大会へのエントリーを募集する</ElementsButton
          >
        </li>
      </BlocksList>
    </BlocksInformation>
    <BlocksInformation>
      <BlocksList class="-horizontal -center">
        <li>
          <ElementsButton @click="modalState = true" class="-primary">大会にエントリーする</ElementsButton>
        </li>
      </BlocksList>
    </BlocksInformation>
  </div>
</template>

<script setup>
const route = useRoute()
const modalState = useEntryTournamentModalState()
const tournament = (await $fetch(`/api/tournaments/${route.params.id}`)).data
const title = tournament.name
useHead({
  title: title,
})
</script>
