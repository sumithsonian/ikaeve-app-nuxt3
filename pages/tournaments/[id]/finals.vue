<template>
  <div>
    <BlocksIndexNav />
    <BlocksHeading>勝者サイド</BlocksHeading>
    <BlocksTournamentBracket />
    <BlocksHeading>敗者サイド</BlocksHeading>
    <BlocksTournamentBracket />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '本戦'
useHead({
  title: title,
})
</script>
