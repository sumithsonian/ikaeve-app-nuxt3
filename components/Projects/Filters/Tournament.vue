<template>
  <BlocksFilter>
    <li>
      <ElementsIcon> filter_alt </ElementsIcon>
      <ElementsTag
        v-for="(status, i) of statuses"
        :key="i"
        @click="selectStatus(status.value)"
        tag="button"
        class="-xsmall"
        :class="{ 'is-active': status.value === localValue.status }"
        >{{ status.name }}</ElementsTag
      >
    </li>
    <li>
      <ElementsFormSelect v-model="localValue.sort" :items="sorts" />
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
      sorts: [
        { value: null, name: '新着順' },
        { value: 'popular', name: '人気順' },
        { value: 'udemae', name: 'ウデマエ順' },
      ],
      statuses: [
        { value: null, name: '全て' },
        { value: 'recruiting', name: '募集中' },
        { value: 'in_progress', name: '開催中' },
        { value: 'finished', name: '終了' },
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
  methods: {
    selectStatus(status) {
      this.localValue.status = status
    },
  },
}
</script>
