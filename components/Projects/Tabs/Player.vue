<template>
  <BlocksTab>
    <li><nuxt-link :to="`/players/${id}/`">プロフィール</nuxt-link></li>
    <li>
      <nuxt-link :to="`/players/${id}/tournaments`"
        >エントリ大会</nuxt-link
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
