<template>
  <component :is="tag" class="tag"><slot /></component>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: 'span' },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.tag {
  font-size: $font;
  border: 1px solid $color-primary;
  padding: $space-xsmall $space-small;
  border-radius: $radius;
  &.-xxsmall {
    font-size: $font-xxsmall;
  }
  &.-xsmall {
    font-size: $font-xsmall;
  }
  &.-small {
    font-size: $font-small;
  }
  &.-large {
    font-size: $font-large;
  }
  &.-xlarge {
    font-size: $font-xlarge;
  }
  &.is-active {
    background-color: rgba($color-primary, 0.4);
  }
}
</style>
