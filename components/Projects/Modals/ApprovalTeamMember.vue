<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>メンバーを承認する</template>
    <template #contents>
      <BlocksParagraph class="-center"
        >「○○」さんから チームAに参加申請が届いています。
        承認しますか？</BlocksParagraph
      >
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large">承認する</ElementsButton>
        </li>
        <li>
          <ElementsButton class="-large">キャンセルする</ElementsButton>
        </li>
      </BlocksList>
      <BlocksParagraph class="-center"
        ><ElementsText class="-sub -xsmall"
          >※承認後にチームから削除可能です。</ElementsText
        ></BlocksParagraph
      >
    </template>
  </BlocksModal>
</template>

<script setup>
const isActive = useApprovalTeamMemberModalState()
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
