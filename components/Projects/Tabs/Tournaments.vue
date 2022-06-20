<template>
  <BlocksTab>
    <li><nuxt-link :to="`/tournaments/`" exact>大会</nuxt-link></li>
    <li><nuxt-link :to="`/tournament-series/`">大会シリーズ</nuxt-link></li>
  </BlocksTab>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
  },
}
</script>
