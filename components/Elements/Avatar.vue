<template>
  <img
    src="https://placehold.jp/150x150.png"
    class="avatar"
    :alt="alt"
  />
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: 'img' },
    size: { type: String, default: null },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.avatar {
  display: inline-block;
  border-radius: $radius-xlarge;
  width: $img-xlarge;
  height: $img-xlarge;
  object-fit: cover;
  background: rgba(0, 0, 0, 0.5);
  &.-xsmall {
    width: $img-xsmall;
    height: $img-xsmall;
  }
  &.-small {
    width: $img-small;
    height: $img-small;
  }
  &.-large {
    width: $img-large;
    height: $img-large;
  }
}
</style>
