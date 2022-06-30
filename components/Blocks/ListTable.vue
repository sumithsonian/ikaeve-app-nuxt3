<template>
  <table class="listTable">
    <thead v-if="typeof $slots.thead === 'function' && $slots.thead()">
      <slot name="thead" />
    </thead>
    <tbody v-if="typeof $slots.tbody === 'function' && $slots.tbody()">
      <slot name="tbody" />
    </tbody>
  </table>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.listTable {
  margin: $space;
  width: calc(100% - #{$space * 2});
  ::v-deep(th),
  ::v-deep(td) {
    padding: $space-xsmall;
    text-align: left;
    vertical-align: middle;
  }
  thead ::v-deep(th) {
    font-size: $font-small;
    color: $color-gray-06;
    border-bottom: 1px solid $color-gray-06;
  }
}
</style>
