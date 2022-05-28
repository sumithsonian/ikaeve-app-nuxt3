<template>
  <div class="filter">
    <ul>
      <li>
        <ElementsIcon> filter_alt </ElementsIcon>
        <ElementsTag tag="button" class="-xsmall is-active"
          >フィルタ</ElementsTag
        >
        <ElementsTag tag="button" class="-xsmall">フィルタ</ElementsTag>
        <ElementsTag tag="button" class="-xsmall">フィルタ</ElementsTag>
        <ElementsTag tag="button" class="-xsmall">フィルタ</ElementsTag>
      </li>
      <li>
        <ElementsFormSelect> 新着順 </ElementsFormSelect>
      </li>
      <li>
        <ElementsDropdown> Splatoon 3 </ElementsDropdown>
        <ElementsDropdown> 2022 </ElementsDropdown>
        <ElementsDropdown> 春シーズン </ElementsDropdown>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.filter ul {
  background: $color-gray-10;
  display: flex;
  padding: $space-small;
  gap: $space-small;
  align-items: center;
  li {
    display: flex;
    gap: $space-small;
  }
}
</style>
