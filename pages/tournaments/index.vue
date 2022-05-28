<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFiltersTournament />
    <BlocksList class="-horizontal">
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
    </BlocksList>
  </div>
</template>

<script setup>
const title = '大会一覧'
useHead({
  title: title,
})
</script>
