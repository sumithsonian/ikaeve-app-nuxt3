<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTournament />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '大会詳細'
useHead({
  title: title,
})
</script>
