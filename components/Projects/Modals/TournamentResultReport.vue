<template>
  <BlocksModal v-if="isActive" @close-from-child="close" class="report">
    <template #heading>予選Aブロック：第1試合</template>
    <template #contents>
      <BlocksParagraph class="-center"
        >勝ったチームは勝敗を入力して、<br />
        確定ボタンをクリックして下さい。</BlocksParagraph
      >
      <div class="report__teams">
        <div class="report__teams__alpha">
          <ElementsAvatar
            :image-url="'https://placehold.jp/150x150.png'"
            :name="'TeamA'"
          />
          <ElementsText>TeamA</ElementsText>
          <ElementsFormInput type="number" class="-large -center" />
        </div>
        <div class="report__teams__versus">
          <ElementsText>VS.</ElementsText>
        </div>
        <div class="report__teams__bravo">
          <ElementsAvatar
            :image-url="'https://placehold.jp/150x150.png'"
            :name="'TeamB'"
          />
          <ElementsText>TeamB</ElementsText>
          <ElementsFormInput type="number" class="-large -center" />
        </div>
      </div>
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large" :is-disabled="true"
            >確定する</ElementsButton
          >
        </li>
        <li>
          <ElementsButton @click="close" class="-large"
            >キャンセル</ElementsButton
          >
        </li>
        <li>
          <ElementsButton class="-link">棄権する</ElementsButton>
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

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.report {
  &__teams {
    display: flex;
    margin: $space-xlarge;
    &__alpha,
    &__bravo {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: $space;
    }
    &__versus {
      display: flex;
      align-items: center;
    }
  }
}
</style>
