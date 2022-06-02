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
  max-width: 640px;
  margin: $space auto;
  ::v-deep(th),
  ::v-deep(td) {
    padding: $space-small;
    vertical-align: middle;

    .formInput {
      width: 100%;
    }
  }
  ::v-deep(th) {
    font-size: $font-xsmall;
    color: $color-gray-05;
    text-align: left;
    white-space: nowrap;
  }
  ::v-deep(td) {
    font-size: $font-small;
  }
}
</style>
