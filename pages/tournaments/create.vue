<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFormsTournament />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '大会作成'
useHead({
  title: title,
})
</script>
