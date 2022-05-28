<template>
  <p class="paragraph"><slot /></p>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.paragraph {
  font-size: $font;
  margin: $space;

  &.-center {
    text-align: center;
  }
  &.-right {
    text-align: right;
  }
}
</style>
