<template>
  <div>
    <BlocksHero
      v-if="!route.path.includes('edit')"
      :name="team.name"
      :image-url="team.image_url"
      :background-image-url="team.background_image_url"
      :twitter-url="team.twitter_url"
      :discord-url="team.discord_url"
      :detail-url="`/teams/${team.id}`"
    />
    <ProjectsTabsTeam v-if="!route.path.includes('edit')" :id="team.id" />
    <NuxtPage :page-key="route.path" :team="team" />
  </div>
</template>

<script setup>
const route = useRoute()
const team = (await $fetch(`/api/teams/${route.params.id}`)).data
const title = team.name
useHead({
  title: title,
})
</script>
