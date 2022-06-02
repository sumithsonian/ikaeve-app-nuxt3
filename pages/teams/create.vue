<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFormsTeam />
  </div>
</template>

<script setup>
const route = useRoute()
const title = 'チーム/団体作成'
useHead({
  title: title,
})
</script>
