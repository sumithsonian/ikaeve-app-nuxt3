<template>
  <img :src="imageUrl" class="avatar" :alt="name" />
</template>

<script>
export default {
  props: {
    imageUrl: { type: String, required: true },
    name: { type: String, default: 'img' },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.avatar {
  display: inline-block;
  border-radius: $radius-xlarge;
  width: $img;
  height: $img;
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
  &.-xlarge {
    width: $img-xlarge;
    height: $img-xlarge;
  }
}
</style>
