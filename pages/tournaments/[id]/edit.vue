<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
    <ProjectsFormsTournament v-model="formData" kind="edit" />
  </div>
</template>

<script setup>
const title = '大会の編集'
useHead({
  title: title,
})

const formData = reactive({
  questions: [],
})
</script>
