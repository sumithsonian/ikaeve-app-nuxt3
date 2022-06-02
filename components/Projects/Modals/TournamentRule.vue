<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>試合ルール</template>
    <template #contents>
      <BlocksList>
        <li>試合形式：リーグ戦（ラウンドロビン）</li>
        <li>通過順位：2</li>
        <li>先取点：2</li>
        <li>第1試合：ヤグラ2点先取、お任せロスト</li>
        <li>第1試合：ヤグラ2点先取、お任せロスト</li>
        <li>第2試合：ヤグラ2点先取、お任せロスト</li>
        <li>第3試合：ヤグラ2点先取、お任せロスト</li>
        <li>第4試合：ヤグラ2点先取、お任せロスト</li>
        <li>第5試合：ヤグラ2点先取、お任せロスト</li>
      </BlocksList>
    </template>
  </BlocksModal>
</template>

<script setup>
const isActive = useTournamentRuleModalState()
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
