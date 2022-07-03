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
  min-width: $btn;
  min-height: 44px;
  border: 1px solid $color-primary;
  padding: $space-xsmall $space-large;
  border-radius: $radius-large;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  background: $color-gray-09;
  color: $color-primary;
  box-sizing: border-box;
  text-align: center;

  &.-large {
    min-width: $btn-large;
  }

  &.-primary {
    background: $color-primary;
    color: $color-black;
    border-color: transparent;
  }
  &.-twitter {
    padding: $space-large $space-xlarge;
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
  &.-withIcon {
    display: inline-block;
    padding: $space-xsmall $space-large $space-small;
  }
  &.-circle {
    min-width: 0;
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
      height: $btn-small;
      width: $btn-small;
      line-height: 1;
    }
  }
  &:disabled {
    background-color: rgba($color-primary, 0.4);
    color: rgba($color-black, 0.4);
  }
  &:hover {
    text-decoration: none;
  }
}
</style>
