<template>
  <div class="formInput" :class="$attrs.class">
    <template v-if="rows === 1">
      <input
        v-model="localValue"
        :type="type"
        class="formInput__input"
        v-bind="$attrs"
        v-on="inputListeners"
      />
      <slot />
    </template>
    <template v-else>
      <textarea
        v-model="localValue"
        class="formInput__input"
        :rows="rows"
        v-bind="$attrs"
        v-on="inputListeners"
      >
      </textarea>
    </template>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: { type: [String, Number], default: null },
    type: { type: String, default: 'text' },
    value: { type: [String, Number], default: null },
    rows: { type: Number, default: 1 },
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.formInput {
  display: inline-flex;
  align-items: center;
  border-radius: $radius-small;
  border: 1px solid transparent;
  overflow: hidden;

  &__input {
    flex: 1;
    border: none;
    padding: $space;
    background: $color-gray-07;
    color: $color-white;
  }

  input:-webkit-autofill {
    // 色が変わらないように、変化までの時間を長くした
    transition: background-color 86400s ease-in-out 0s,
      color 86400s ease-in-out 0s;
  }
  &.-block {
    width: 100%;
  }

  &.-large &__input {
    font-size: $font-large;
  }

  &.-center &__input {
    text-align: center;
  }
}
</style>
