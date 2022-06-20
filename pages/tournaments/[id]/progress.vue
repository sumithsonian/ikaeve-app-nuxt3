<template>
  <div>
    <ProjectsListsProgress :items="matchs" />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '進行表'
useHead({
  title: title,
})
const matchs = (await $fetch('/api/tournaments/1/matchs')).data
</script>
