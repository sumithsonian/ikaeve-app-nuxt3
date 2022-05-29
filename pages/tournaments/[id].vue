<template>
  <div>
    <BlocksHero
      name="大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名"
      image-url="https://placehold.jp/150x150.png"
      background-image-url="https://placehold.jp/1080x360.png"
    />
    <ProjectsTabsTournament />
    <NuxtPage :page-key="route.path" />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '大会詳細'
useHead({
  title: title,
})
const tournament = await $fetch('/api/tournaments/1')
</script>
