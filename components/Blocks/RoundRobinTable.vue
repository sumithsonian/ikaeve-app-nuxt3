<template>
  <div>
    <table>
      <thead v-if="typeof $slots.thead === 'function' && $slots.thead()">
        <slot name="thead" />
      </thead>
      <tbody v-if="typeof $slots.tbody === 'function' && $slots.tbody()">
        <slot name="tbody" />
      </tbody>
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
    border: 1px solid $color-gray-07;
    &:empty {
      background: linear-gradient(
        to bottom left,
        transparent,
        transparent 49%,
        $color-gray-07 49%,
        $color-gray-07 51%,
        /* 線の太さ */ transparent 51%,
        transparent
      );
    }
  }
  ::v-deep(th) {
    background: $color-gray-08;
    font-size: $font-xsmall;
    color: $color-gray-05;
  }
  ::v-deep(td) {
    font-size: $font-small;
  }
  thead ::v-deep(th) {
    &:nth-last-child(-n + 2) {
      background: $color-gray-10;
    }
  }
}
</style>
