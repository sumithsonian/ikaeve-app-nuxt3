<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>メンバーを削除する</template>
    <template #contents>
      <BlocksParagraph class="-center"
        >「○○」さんをチームAから削除しますか？</BlocksParagraph
      >
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
    </template>
  </BlocksModal>
</template>

<script setup>
const isActive = useDeleteTeamMemberModalState()
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
