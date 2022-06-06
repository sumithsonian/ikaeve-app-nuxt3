<template>
  <BlocksTab>
    <li><nuxt-link :to="`/teams/${id}/`" exact>基本情報</nuxt-link></li>
    <li v-if="type === 'player'">
      <nuxt-link :to="`/teams/${id}/tournaments`">エントリ大会</nuxt-link>
    </li>
    <li v-else>
      <nuxt-link :to="`/teams/${id}/tournaments`">主催大会</nuxt-link>
    </li>
  </BlocksTab>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    type: { type: String, required: true },
  },
}
</script>
