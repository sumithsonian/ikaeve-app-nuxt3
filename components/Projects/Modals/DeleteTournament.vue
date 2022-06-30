<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>大会を削除する</template>
    <template #contents>
      <BlocksParagraph class="-center">大会を削除しますか？</BlocksParagraph>
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large">削除する</ElementsButton>
        </li>
        <li>
          <ElementsButton @click="close" class="-large"
            >キャンセルする</ElementsButton
          >
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
const isActive = useDeleteTournamentModalState()
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
