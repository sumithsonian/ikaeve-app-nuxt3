<template>
  <BlocksTab>
    <li><nuxt-link :to="`/players/${id}/`">プロフィール</nuxt-link></li>
    <li>
      <nuxt-link :to="`/players/${id}/entered-tournaments`"
        >参加した大会</nuxt-link
      >
    </li>
    <li>
      <nuxt-link :to="`/players/${id}/held-tournaments`"
        >開催した大会</nuxt-link
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
