<template>
  <div class="player">
    <ElementsAvatar class="-small" :image-url="imageUrl" :name="name" />{{
      name
    }}
    <img src="@/assets/images/logo_twitter.svg" alt="Twitter" height="16" />
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    imageUrl: { type: String, default: null },
    twitterUrl: { type: String, default: null },
    discordUrl: { type: String, default: null },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.player {
  display: flex;
  align-items: center;
  display: flex;
  gap: $space;
}
</style>
