<template>
  <div>
    <BlocksHero
      :name="tournament.name"
      :background-image-url="tournament.background_image_url"
      :tags="tournament.tags"
    />
    <ProjectsTabsTournament />
    <NuxtPage :page-key="route.path" />
  </div>
</template>

<script setup>
const route = useRoute()
const tournament = (await $fetch('/api/tournaments/1')).data
const title = tournament.name
useHead({
  title: title,
})
</script>
