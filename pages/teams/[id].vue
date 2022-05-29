<template>
  <div>
    <BlocksHero
      :name="team.name"
      :background-image-url="team.background_image_url"
    />
    <ProjectsTabsTeam />
    <NuxtPage :page-key="route.path" :team="team" />
  </div>
</template>

<script setup>
const route = useRoute()
const team = (await $fetch('/api/teams/1')).data
const title = team.name
useHead({
  title: title,
})
</script>
