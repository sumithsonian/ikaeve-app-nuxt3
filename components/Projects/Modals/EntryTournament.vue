<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>大会にエントリする</template>
    <template #contents>
      <BlocksParagraph class="-center"
        >チームを選んで大会にエントリして下さい。</BlocksParagraph
      >
      <BlocksParagraph class="-center"
        ><ElementsText class="-sub -xsmall"
          >エントリするには<nuxt-link to="/teams/create">チーム作成</nuxt-link>が必要です。</ElementsText
        ></BlocksParagraph
      >
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large">エントリする</ElementsButton>
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
const isActive = useEntryTournamentModalState()
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
