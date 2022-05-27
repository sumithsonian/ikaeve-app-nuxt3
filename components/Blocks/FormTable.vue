<template>
  <div>
    <table>
      <slot />
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

table {
  width: calc(100% - #{$space} * 2);
  margin: $space;
  ::v-deep(th),
  ::v-deep(td) {
    padding: $space-small;
    vertical-align: middle;
  }
  ::v-deep(th) {
    font-size: $font-xsmall;
    color: $color-gray-05;
  }
  ::v-deep(td) {
    font-size: $font-small;
  }
}
</style>
