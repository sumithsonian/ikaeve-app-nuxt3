<template>
  <component
    :is="tag"
    :to="compTo"
    :href="compTo"
    :class="[
      'button',
      isActive ? 'is-active' : null,
      isDisabled ? 'is-disabled' : null,
    ]"
    :type="tag === 'button' ? type : null"
    :disabled="isCompDisabled"
    ><slot
  /></component>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'button' },
    to: { type: String, default: null },
    display: { type: String, default: null },
    isActive: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    category: { type: String, default: null },
  },
  computed: {
    tag() {
      if (
        this.to &&
        (this.to.includes('http') || this.to.indexOf('#') === 0) &&
        !this.isDisabled
      ) {
        return 'a'
      } else if (this.to && !this.to.includes('http') && !this.isDisabled) {
        // https://github.com/nuxt/framework/issues/3672
        return resolveComponent('NuxtLink')
      } else {
        return 'button'
      }
    },
    isCompDisabled() {
      return this.tag === 'button' && this.isDisabled
    },
    compTo() {
      return this.to && !this.isDisabled ? this.to : null
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.button {
  border: 1px solid $color-primary;
  padding: $space-small $space-large;
  border-radius: $radius-xlarge;
  display: inline-block;
  line-height: 1.2;
  background: $color-gray-09;
  color: $color-primary;

  &.-small {
    padding: $space-xsmall $space;
  }
  &.-large {
    padding: $space $space-xlarge;
  }

  &.-primary {
    background: $color-primary;
    color: $color-black;
    border-color: transparent;
  }
  &.-twitter {
    background: $color-twitter;
    border-color: $color-twitter;
    color: $color-white;
  }

  &.-link {
    border: none;
    padding: 0 $space-xsmall;
    color: $color-primary;
    background: transparent;
  }
  &.-circle {
    line-height: 0;
    padding: 0;
    height: $img;
    width: $img;
    text-align: center;
    &.-large {
      height: $img-large;
      width: $img-large;
    }
    &.-withText {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1;
    }
  }
  &:disabled {
    background-color: rgba($color-primary, 0.4);
    color: rgba($color-black, 0.4)
  }
}
</style>
