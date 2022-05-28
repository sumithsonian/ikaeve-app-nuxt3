<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTournament />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '進行表｜大会'
useHead({
  title: title,
})
</script>
