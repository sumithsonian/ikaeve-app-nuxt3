<template>
  <BlocksFilter>
    <li>
      <ElementsIcon> filter_alt </ElementsIcon>
      <ElementsTag tag="button" class="-xsmall is-active">全て</ElementsTag>
      <ElementsTag tag="button" class="-xsmall">募集中</ElementsTag>
      <ElementsTag tag="button" class="-xsmall">開催中</ElementsTag>
      <ElementsTag tag="button" class="-xsmall">終了</ElementsTag>
    </li>
    <li>
      <ElementsFormSelect :items="sorts" />
    </li>
  </BlocksFilter>
</template>

<script>
export default {
  data() {
    return {
      sorts: ['新着順', '人気順', 'ウデマエ順'],
    }
  },
}
</script>
