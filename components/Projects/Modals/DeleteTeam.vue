<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>チームを削除する</template>
    <template #contents>
      <BlocksParagraph class="-center">チームを削除しますか？</BlocksParagraph>
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large">削除する</ElementsButton>
        </li>
        <li>
          <ElementsButton class="-large">申請する</ElementsButton>
        </li>
      </BlocksList>
      <BlocksParagraph class="-center"
        ><ElementsText class="-sub -xsmall"
          >※一度削除すると復元できません。<br />
          削除される場合はお気を付け下さい。</ElementsText
        ></BlocksParagraph
      >
    </template>
  </BlocksModal>
</template>

<script setup>
const isActive = useDeleteTeamModalState()
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
