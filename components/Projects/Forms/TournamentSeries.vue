<template>
  <div>
    <BlocksHeading>基本情報</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>大会シリーズ名</th>
        <td><ElementsFormInput class="-block" /></td>
      </tr>
      <tr>
        <th>大会シリーズ画像</th>
        <td><input type="file" /></td>
      </tr>
      <tr>
        <th>大会シリーズ概要</th>
        <td><ElementsFormInput rows="10" class="-block" /></td>
      </tr>
    </BlocksFormTable>
    <BlocksHeading>その他</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>公認大会申請</th>
        <td><ElementsFormSelectButton>申請する</ElementsFormSelectButton></td>
      </tr>
    </BlocksFormTable>
    <BlocksInformation>
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large">{{
            btnLabel
          }}</ElementsButton>
        </li>
        <li v-if="kind === 'edit'">
          <ElementsButton @click="modalState = true" class="-link"
            >大会シリーズを削除する</ElementsButton
          >
        </li></BlocksList
      >
    </BlocksInformation>
  </div>
</template>

<script setup>
const modalState = useDeleteTournamentSeriesModalState()
</script>

<script>
export default {
  props: {
    modelValue: { type: Object, default: {} },
    kind: { type: String, default: null },
  },
  computed: {
    btnLabel() {
      return this.kind === 'edit' ? '保存する' : '作成する'
    },
  },
}
</script>
