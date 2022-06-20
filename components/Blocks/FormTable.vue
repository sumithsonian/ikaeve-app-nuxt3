<template>
  <div class="formTable">
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

.formTable {
  width: 640px;
  .formTable {
    width: 100%;
  }
  border-top: 1px solid $color-gray-07;
  margin: 0 auto;
  padding: $space 0;
  & + .formTable {
    margin-top: 0;
    padding-top: 0;
  }
  .formTable {
    &:first-child {
      border-top: 0;
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }

  @include breakpointDown(small) {
    width: calc(100% - $space * 2);
  }
  table {
    width: 100%;
    ::v-deep(th),
    ::v-deep(td) {
      padding: $space $space-small;
      vertical-align: middle;

      > ul {
        display: flex;
        gap: $space;
      }
    }
    ::v-deep(th) {
      font-size: $font-xsmall;
      color: $color-gray-02;
      text-align: left;
      white-space: nowrap;
      width: 8em;
      padding-left: 0;
    }
    ::v-deep(td) {
      font-size: $font-small;
      width: calc(100% - 8em);
      padding-right: 0;

      > * + * {
        margin-top: $space-small;
      }
    }
  }
}
</style>
