<template>
  <div class="formSelectButton">
    <!-- keyは再描画用 -->
    <input
      v-model="localValue"
      :id="name + '_' + id"
      :key="name + '_' + id"
      :name="name"
      :type="type"
      :value="id"
      :true-value="trueValue"
      :false-value="falseValue"
      v-bind="$attrs"
    />
    <label :for="name + '_' + id">
      <template v-if="type === 'checkbox'">
        <ElementsIcon v-if="localValue"> check_box_outline </ElementsIcon>
        <ElementsIcon v-else> check_box_outline_blank </ElementsIcon>
      </template>
      <template v-if="type === 'radio'">
        <ElementsIcon v-if="localValue === id">
          radio_button_checked
        </ElementsIcon>
        <ElementsIcon v-else> radio_button_unchecked </ElementsIcon>
      </template>
      <span> <slot /></span>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: { type: [String, Number, Boolean, Array], default: null },
    type: { type: String, default: 'checkbox' },
    id: { type: [String, Number], default: null }, // ポストされる値（全ての場合はnullがくる）
    name: { type: String, required: true }, // html用: ボタングループの識別子
    trueValue: { type: [String, Number, Boolean], default: true },
    falseValue: { type: [String, Number, Boolean], default: null },
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

.formSelectButton {
  display: inline-block;

  input {
    display: none;
  }
  label {
    display: inline-flex;
    align-items: center;
    gap: $space-xsmall;
  }
  :checked + label .material-icons {
    color: $color-secondary;
  }
}
</style>
