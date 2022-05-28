<template>
  <component :is="tag" class="text"><slot /></component>
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

.text {
  font-size: $font;
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

  // 種類
  &.-sub {
    color: $color-gray-03;
  }
}
</style>
