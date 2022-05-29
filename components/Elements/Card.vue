<template>
  <nuxt-link to="/tournaments/1/" class="card">
    <div class="card__image">
      <slot name="image" />
    </div>
    <div class="card__text">
      <slot name="text" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.card {
  display: block;
  background: $color-gray-08;
  border-radius: $space;
  overflow: hidden;
  max-width: 240px;
  &__image {
    position: relative;
    ::v-deep(img) {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 16 / 9;
    }
    ::v-deep(ul) {
      position: absolute;
      top: $space-small;
      right: $space-small;
      display: flex;
      gap: $space-small;
    }
  }
  &__text {
    padding: $space;
    ::v-deep(p) {
      font-size: $font-large;
    }
    ::v-deep(dl) {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: $space-xsmall 0;
      dt,
      dd {
        font-size: $font-xsmall;
      }
      dt {
        color: $color-gray-05;
        width: 5em;
      }
      dd {
        width: calc(100% - 5em);
      }
    }
  }
}
</style>
