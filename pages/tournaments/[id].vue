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
  </div>
</template>

<script setup>
const route = useRoute()
const tournament = (await $fetch(`/api/tournaments/${route.params.id}`)).data
const title = tournament.name
useHead({
  title: title,
})
</script>
