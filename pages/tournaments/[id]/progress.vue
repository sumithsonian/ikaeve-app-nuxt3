<template>
  <div>
    <ProjectsListsProgress :items="matchs.data" />
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()
const { data: matchs } = await $fetch2(
  `/api/tournaments/${route.params.id}/matchs`,
)

const title = '進行表'
useHead({
  title: title,
})
</script>
