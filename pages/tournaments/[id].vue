<template>
  <div>
    <BlocksHero
      :name="tournament.data.name"
      :background-image-url="tournament.data.background_image_url"
    />
    <ProjectsTabsTournament />
    <NuxtPage :page-key="route.path" />
  </div>
</template>

<script setup>
const route = useRoute()
const tournament = await $fetch('/api/tournaments/1')
const title = tournament.data.name
useHead({
  title: title,
})
</script>
