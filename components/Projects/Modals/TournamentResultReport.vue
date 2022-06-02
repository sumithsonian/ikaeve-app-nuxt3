<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>予選Aブロック：第1試合</template>
    <template #contents>
      <BlocksParagraph class="-center"
        >勝ったチームは勝敗を入力して、<br />
        確定ボタンをクリックして下さい。</BlocksParagraph
      >
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large">確定する</ElementsButton>
        </li>
        <li>
          <ElementsButton @click="close" class="-large"
            >キャンセル</ElementsButton
          >
        </li>
        <li>
          <nuxt-link>棄権する</nuxt-link>
        </li>
      </BlocksList>
    </template>
  </BlocksModal>
</template>

<script setup>
const isActive = useTournamentResultReportModalState()
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
