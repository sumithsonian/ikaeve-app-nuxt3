<template>
  <div class="overlay"></div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba($color-black, 0.5);
}
</style>
