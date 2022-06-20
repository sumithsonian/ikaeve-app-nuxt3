<template>
  <BlocksFilter>
    <li>
      <ElementsIcon> filter_alt </ElementsIcon>
      <ul>
        <li v-for="(filterGroup, i) of filterGroups" :key="i">
          <ElementsTag
            v-for="(filter, j) of filterGroup"
            :key="j"
            @click="
              filter.key === null
                ? resetFilter()
                : selectFilter(filter.key, filter.value)
            "
            tag="button"
            class="-xsmall"
            :class="{ 'is-active': isActive(filter.key, filter.value) }"
            >{{ filter.name }}</ElementsTag
          >
        </li>
      </ul>
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
      filterGroups: [
        [{ key: null, value: null, name: '全て' }],
        [
          { key: 'game_title', value: 'splatoon_3', name: 'Splatoon 3' },
          { key: 'game_title', value: 'splatoon_2', name: 'Splatoon 2' },
        ],
        [
          { key: 'status', value: 'recruiting', name: '募集中' },
          { key: 'status', value: 'in_progress', name: '開催中' },
          { key: 'status', value: 'finished', name: '終了' },
        ],
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
    selectFilter(key, value) {
      if (this.localValue[key] === value) {
        this.localValue[key] = null
      } else {
        this.localValue[key] = value
      }
    },
    resetFilter() {
      Object.keys(this.localValue).forEach((key) => {
        if (key === 'sort' || key === 'page') {
          return
        }
        this.localValue[key] = null
      })
    },
    isActive(key, value) {
      if (key === null) {
        return (
          this.localValue.game_title === null && this.localValue.status === null
        )
      } else {
        return this.localValue[key] === value
      }
    },
  },
}
</script>
