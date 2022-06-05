<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFormsTournament kind="edit" />
  </div>
</template>

<script setup>
const title = '大会の編集'
useHead({
  title: title,
})
</script>
