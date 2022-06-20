<template>
  <BlocksModal v-if="isActive" @close-from-child="close">
    <template #heading>新規会員登録/ログイン</template>
    <template #contents>
      <BlocksParagraph class="-center"
        >ユーザー登録すると大会を主催したり、<br />
        大会への参加が可能になります。</BlocksParagraph
      >
      <BlocksList class="-center">
        <li>
          <ElementsButton to="/auth/redirect" class="-twitter -large" @click="close"
            >Twitterで新規会員登録/ログイン</ElementsButton
          >
        </li>
      </BlocksList>
      <BlocksParagraph class="-center"
        ><ElementsText class="-sub -xsmall"
          >新規会員登録/ログインする際、<br />イカイベの利用規約とプライバシーポリシーに同意したものとみなします。</ElementsText
        ></BlocksParagraph
      >
    </template>
  </BlocksModal>
</template>

<script setup>
const isActive = useLoginModalState()
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
