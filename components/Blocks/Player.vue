<template>
  <div class="player">
    <ElementsAvatar class="-small" />ユーザー名
    <img src="@/assets/images/logo_twitter.svg" alt="Twitter" height="16" />
  </div>
</template>

<script>
export default {}
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
