<template>
  <BlocksTab>
    <li><nuxt-link :to="`/players/${id}/`">プロフィール</nuxt-link></li>
    <li>
      <nuxt-link :to="`/players/${id}/entered-tournaments`"
        >エントリ大会</nuxt-link
      >
    </li>
    <li>
      <nuxt-link :to="`/players/${id}/held-tournaments`"
        >主催大会</nuxt-link
      >
    </li>
  </BlocksTab>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
  },
}
</script>
