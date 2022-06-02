<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFormsTeam kind="edit" />
  </div>
</template>

<script setup>
const route = useRoute()
const title = 'チームの編集'
useHead({
  title: title,
})
</script>
