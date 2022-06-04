<template>
  <BlocksFilter>
    <li>
      <ElementsIcon> filter_alt </ElementsIcon>
      <ElementsTag tag="button" class="-xsmall is-active">全て</ElementsTag>
      <ElementsTag tag="button" class="-xsmall">メンバー募集中</ElementsTag>
      <ElementsTag tag="button" class="-xsmall">ガチ</ElementsTag>
      <ElementsTag tag="button" class="-xsmall">エンジョイ</ElementsTag>
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
      sorts: ['新着順', 'ウデマエ順', 'ポイント順'],
    }
  },
}
</script>
