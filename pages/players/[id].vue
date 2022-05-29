<template>
  <div>
    <BlocksHero
      :name="user.name"
      :image-url="user.image_url"
      :background-image-url="user.background_image_url"
      :twitter-url="user.twitter_url"
    />
    <ProjectsTabsPlayer />
    <NuxtPage :page-key="route.path" :user="user" />
  </div>
</template>

<script setup>
const route = useRoute()
const user = (await $fetch('/api/users/1')).data
const title = user.name
useHead({
  title: title,
})
</script>
