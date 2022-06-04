<template>
  <BlocksFilter>
    <li><ElementsDropdown :items="gameTitles" /></li>
    <li>
      <ElementsDropdown :items="years" />
    </li>
    <li>
      <ElementsDropdown :items="seasons" />
    </li>
  </BlocksFilter>
</template>

<script>
export default {
  props: {
    modelValue: { type: Object, default: null },
  },
  data() {
    return {
      gameTitles: ['Splatoon 3', 'Splatoon 2'],
      years: ['2022'],
      seasons: [
        '初春シーズン',
        '春シーズン',
        '夏シーズン',
        '秋シーズン',
        '年間',
      ],
    }
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
