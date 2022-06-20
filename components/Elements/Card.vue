<template>
  <nuxt-link :to="to" class="card">
    <div
      v-if="typeof $slots.image === 'function' && $slots.image()"
      class="card__image"
    >
      <slot name="image" />
    </div>
    <div
      v-if="typeof $slots.text === 'function' && $slots.text()"
      class="card__text"
    >
      <slot name="text" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true },
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
  max-width: 480px;
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
      gap: $space-xsmall;
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

      @include breakpointDown(small) {
        display: block;
        dt,
        dd {
          width: auto;
        }
      }
    }
  }
}
</style>
