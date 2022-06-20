<template>
  <div class="form">
    <BlocksHeading>基本情報</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>チーム種別</th>
        <td>
          <ul>
            <li>
              <ElementsFormSelectButton type="radio"
                >プレイヤーチーム</ElementsFormSelectButton
              >
            </li>
            <li>
              <ElementsFormSelectButton type="radio"
                >大会主催団体</ElementsFormSelectButton
              >
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>チーム名</th>
        <td><ElementsFormInput class="-block" /></td>
      </tr>
      <tr>
        <th>チーム画像</th>
        <td><input type="file" /></td>
      </tr>
      <tr>
        <th>チームアイコン</th>
        <td><input type="file" /></td>
      </tr>
      <tr>
        <th>チーム概要</th>
        <td><ElementsFormInput rows="5" class="-block" /></td>
      </tr>
      <tr>
        <th>Twitter</th>
        <td><ElementsFormInput class="-block" /></td>
      </tr>
      <tr>
        <th>Discorn</th>
        <td><ElementsFormInput class="-block" /></td>
      </tr>
      <tr>
        <th>メンバー</th>
        <td>
          <ul class="form__memberList">
            <li v-for="(player, i) of players.data" :key="i">
              <ElementsPlayer
                :name="player.name"
                :image-url="player.image_url"
                :twitter-url="player.twitter_url"
              />
              <div class="form__memberList__actionBtns">
                <ElementsButton
                  @click="approvalTeamMemberModalState = true"
                  class="-primary -small"
                  >承認する</ElementsButton
                >
                <ElementsButton
                  @click="deleteTeamMemberModalState = true"
                  class="-small"
                  >削除する</ElementsButton
                >
              </div>
            </li>
          </ul>
          <ElementsAttention
            v-if="kind !== 'edit'"
            class="form__entryMemberAttention"
            >チーム作成後にメンバー募集リンクが表示されます。メンバーにリンクを送り、チーム参加申請をお願いしましょう。</ElementsAttention
          >
        </td>
      </tr>
      <tr>
        <th>公開設定</th>
        <td>
          <ul>
            <li>
              <ElementsFormSelectButton type="radio"
                >公開</ElementsFormSelectButton
              >
            </li>
            <li>
              <ElementsFormSelectButton type="radio"
                >限定公開</ElementsFormSelectButton
              >
            </li>
            <li>
              <ElementsFormSelectButton type="radio"
                >非公開</ElementsFormSelectButton
              >
            </li>
          </ul>
        </td>
      </tr>
    </BlocksFormTable>
    <BlocksInformation>
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large">{{
            btnLabel
          }}</ElementsButton>
        </li>
        <li v-if="kind === 'edit'">
          <ElementsButton @click="deleteTeamModalState = true" class="-link"
            >チームを削除する</ElementsButton
          >
        </li></BlocksList
      >
    </BlocksInformation>
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const { data: players } = await $fetch2('/api/users')
const deleteTeamModalState = useDeleteTeamModalState()
const approvalTeamMemberModalState = useApprovalTeamMemberModalState()
const deleteTeamMemberModalState = useDeleteTeamMemberModalState()
</script>

<script>
export default {
  props: {
    modelValue: { type: Object, default: {} },
    kind: { type: String, default: null },
  },
  computed: {
    btnLabel() {
      return this.kind === 'edit' ? '保存する' : '作成する'
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.form {
  &__memberList {
    display: flex;
    flex-direction: column;
    gap: $space-small;
    li {
      display: flex;
      justify-content: space-between;
    }
    &__actionBtns {
      display: flex;
      gap: $space-small;
    }
  }
  &__entryMemberAttention {
    margin-top: $space;
  }
}
</style>
