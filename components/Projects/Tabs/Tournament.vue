<template>
  <BlocksTab>
    <li><nuxt-link :to="`/tournaments/${id}/`" exact>大会概要</nuxt-link></li>
    <li><nuxt-link :to="`/tournaments/${id}/qualifying`">予選</nuxt-link></li>
    <li><nuxt-link :to="`/tournaments/${id}/finals`">本戦</nuxt-link></li>
    <li><nuxt-link :to="`/tournaments/${id}/progress`">進行表</nuxt-link></li>
    <li><nuxt-link :to="`/tournaments/${id}/teams`">参加チーム</nuxt-link></li>
  </BlocksTab>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
  },
}
</script>
