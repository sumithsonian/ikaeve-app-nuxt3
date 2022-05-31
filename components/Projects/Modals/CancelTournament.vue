<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>大会エントリを取り消す</template>
    <template #contents>
      <BlocksParagraph class="-center"
        >「○○」のエントリを取り消しますか？</BlocksParagraph
      >
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large">取り消す</ElementsButton>
        </li>
        <li>
          <ElementsButton class="-large">キャンセル</ElementsButton>
        </li>
      </BlocksList>
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
