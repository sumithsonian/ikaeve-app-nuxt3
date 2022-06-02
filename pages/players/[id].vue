<template>
  <div>
    <BlocksHero
      v-if="!route.path.includes('edit')"
      :name="player.name"
      :image-url="player.image_url"
      :background-image-url="player.background_image_url"
      :twitter-url="player.twitter_url"
      :detail-url="`/players/${player.id}`"
    />
    <ProjectsTabsPlayer v-if="!route.path.includes('edit')" :id="player.id" />
    <NuxtPage :page-key="route.path" :player="player" />
  </div>
</template>

<script setup>
const route = useRoute()
const player = (await $fetch(`/api/users/${route.params.id}`)).data
const title = player.name
useHead({
  title: title,
})
</script>
