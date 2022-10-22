<template>
  <div>
    <template v-if="!route.path.includes('edit')">
      <BlocksHero
        :name="player.data.name"
        :image-url="player.data.image_url"
        :background-image-url="player.data.background_image_url"
        :twitter-url="player.data.twitter_url"
        :detail-url="`/players/${player.data.id}`"
        :is-owner="player.data.is_me"
      />
      <ProjectsTabsPlayer :id="player.data.id" />
    </template>
    <NuxtPage :player="player.data" />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()
const { data: player } = await $fetch2(`/users/${route.params.id}`)
useHead({
  title: player.value.data.name,
})
</script>
