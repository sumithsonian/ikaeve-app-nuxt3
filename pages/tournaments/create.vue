<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFormsTournament v-model="formData" />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '大会作成'
useHead({
  title: title,
})

const formData = reactive({
  questions: ['イキゴミ', '好きなブキ'],
})
</script>
