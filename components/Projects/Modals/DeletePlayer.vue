<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>退会する</template>
    <template #contents>
      <BlocksParagraph class="-center">チームを削除しますか？</BlocksParagraph>
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large"
            >イカイベから退会しますか？</ElementsButton
          >
        </li>
        <li>
          <ElementsButton class="-large">キャンセル</ElementsButton>
        </li>
      </BlocksList>
      <BlocksParagraph class="-center"
        ><ElementsText class="-sub -xsmall"
          >※一度退会すると復元できません。
          退会される場合はお気を付け下さい。</ElementsText
        ></BlocksParagraph
      >
    </template>
  </BlocksModal>
</template>

<script setup>
const isActive = useDeletePlayerModalState()
</script>

<script>
export default {
  methods: {
    close() {
      this.isActive = false
    },
  },
}
</script>
