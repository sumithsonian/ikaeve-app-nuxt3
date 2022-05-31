<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFormsTournament />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '大会の編集'
useHead({
  title: title,
})
</script>
