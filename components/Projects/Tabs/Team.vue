<template>
  <BlocksTab>
    <li><nuxt-link :to="`/teams/${id}/`" exact>基本情報</nuxt-link></li>
    <li><nuxt-link :to="`/teams/${id}/tournaments`">開催した大会</nuxt-link></li>
  </BlocksTab>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
  },
}
</script>
