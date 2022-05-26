<template>
  <table>
    <thead v-if="this.$scopedSlots.thead">
      <slot name="thead" />
    </thead>
    <tbody v-if="this.$scopedSlots.tbody">
      <slot name="tbody" />
    </tbody>
  </table>
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
    border: 1px solid $color-gray-07;
    border-left: none;
    border-right: none;
  }
  ::v-deep(th) {
    background: $color-gray-08;
    font-size: $font-xsmall;
    color: $color-gray-05;
  }
  ::v-deep(td) {
    font-size: $font-small;
  }
}
</style>
