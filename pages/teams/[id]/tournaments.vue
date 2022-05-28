<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsTeam />
    <BlocksHeading>最近参加した大会・2</BlocksHeading>
    <BlocksList class="-horizontal">
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
    </BlocksList>
  </div>
</template>

<script setup>
const route = useRoute()
const title = '開催した大会｜チーム詳細'
useHead({
  title: title,
})
</script>
