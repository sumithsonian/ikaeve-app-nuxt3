<template>
  <div class="information">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.information {
  position: sticky;
  bottom: 63px; // appBarの高さ
  background: $color-gray-08;
  overflow: hidden;
}
</style>
