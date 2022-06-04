<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>チームAに参加申請する</template>
    <template #contents>
      <BlocksParagraph class="-center"
        >チームAに参加申請しますか？</BlocksParagraph
      >
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large">申請する</ElementsButton>
        </li>
        <li>
          <ElementsButton @click="close" class="-large"
            >キャンセルする</ElementsButton
          >
        </li>
      </BlocksList>
      <BlocksParagraph class="-center"
        ><ElementsText class="-sub -xsmall"
          >※チームリーダーが承認するまで、<br />しばらくお待ち下さい。</ElementsText
        ></BlocksParagraph
      >
    </template>
  </BlocksModal>
</template>

<script setup>
const isActive = useEntryTeamModalState()
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
