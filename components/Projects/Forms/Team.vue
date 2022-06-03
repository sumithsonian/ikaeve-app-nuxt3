<template>
  <div>
    <BlocksHeading>基本情報</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>チーム種別</th>
        <td>
          <ElementsFormSelectButton type="radio"
            >プレイヤーチーム</ElementsFormSelectButton
          >
          <ElementsFormSelectButton type="radio"
            >大会主催団体</ElementsFormSelectButton
          >
        </td>
      </tr>
      <tr>
        <th>チーム名</th>
        <td><ElementsFormInput /></td>
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
        <td><ElementsFormInput rows="5" /></td>
      </tr>
      <tr>
        <th>Twitter</th>
        <td><ElementsFormInput /></td>
      </tr>
      <tr>
        <th>Discorn</th>
        <td><ElementsFormInput /></td>
      </tr>
      <tr>
        <th>メンバー</th>
        <td>
          <ElementsPlayer
            v-for="(player, i) of players"
            :name="player.name"
            :image-url="player.image_url"
            :twitter-url="player.twitter_url"
            :key="i"
          />
          <ElementsText class="-sub -xsmall"
            >登録後にメンバー募集リンクが表示されます。メンバーにリンクを送り、チーム参加申請をお願いしましょう。</ElementsText
          >
        </td>
      </tr>
      <tr>
        <th>公開設定</th>
        <td>
          <ElementsFormSelectButton type="radio">公開</ElementsFormSelectButton>
          <ElementsFormSelectButton type="radio"
            >限定公開</ElementsFormSelectButton
          >
          <ElementsFormSelectButton type="radio"
            >非公開</ElementsFormSelectButton
          >
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
          <ElementsButton @click="modalState = true" class="-link"
            >チームを削除する</ElementsButton
          >
        </li></BlocksList
      >
    </BlocksInformation>
  </div>
</template>

<script setup>
const players = (await $fetch('/api/users')).data
const modalState = useDeleteTeamModalState()
</script>

<script>
export default {
  props: {
    kind: { type: String, default: null },
  },
  computed: {
    btnLabel() {
      return this.kind === 'edit' ? '保存する' : '作成する'
    },
  },
}
</script>
