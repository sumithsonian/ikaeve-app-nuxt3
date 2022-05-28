<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsTabsPlayer />
    <BlocksHeading>開催した大会・5</BlocksHeading>
    <BlocksList class="-horizontal">
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
    </BlocksList>
  </div>
</template>

<script setup>
const route = useRoute()
const title = '開催した大会｜プレイヤー詳細'
useHead({
  title: title,
})
</script>
