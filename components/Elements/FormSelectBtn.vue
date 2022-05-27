<template>
  <div class="formSelectBtn">
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
        <span class="material-icons" v-if="localValue"> check_box_outline </span>
        <span class="material-icons" v-else> check_box_outline_blank </span>
      </template>
      <template v-if="type === 'radio'">
        <span class="material-icons" v-if="localValue === id">
          radio_button_checked
        </span>
        <span class="material-icons" v-else> radio_button_unchecked </span>
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

.formSelectBtn {
  display: inline-block;

  input {
    display: none;
  }
  label {
    display: inline-flex;
    align-items: center;
  }
  :checked + label .material-icons {
    color: $color-secondary;
  }

  .material-icons {
    width: 24px;
  }
}
</style>
