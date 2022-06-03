<template>
  <div>
    <BlocksHeading>基本情報</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>対象タイトル</th>
        <td>
          <ElementsFormSelectButton type="radio"
            >スプラトゥーン3</ElementsFormSelectButton
          >
          <ElementsFormSelectButton type="radio"
            >スプラトゥーン2</ElementsFormSelectButton
          >
        </td>
      </tr>
      <tr>
        <th>主催者</th>
        <td><ElementsFormSelect :items="['イカイベ運営チーム']" /></td>
      </tr>
      <tr>
        <th>大会シリーズ</th>
        <td>
          <ElementsFormSelect :items="['エリア杯', 'ヤグラ杯', 'ホコ杯']" />
        </td>
      </tr>
      <tr>
        <th>大会名</th>
        <td><ElementsFormInput class="-block" /></td>
      </tr>
      <tr>
        <th>大会画像</th>
        <td><input type="file" /></td>
      </tr>
      <tr>
        <th>募集期間</th>
        <td><ElementsFormInput />〜<ElementsFormInput /></td>
      </tr>
      <tr>
        <th>開催期間</th>
        <td><ElementsFormInput />〜<ElementsFormInput /></td>
      </tr>
      <tr>
        <th>大会概要</th>
        <td><ElementsFormInput rows="5" class="-block" /></td>
      </tr>
      <tr>
        <th>募集チーム数</th>
        <td><ElementsFormInput />〜<ElementsFormInput /></td>
      </tr>
      <tr>
        <th>チーム人数</th>
        <td><ElementsFormInput /></td>
      </tr>
      <tr>
        <th>配信URL</th>
        <td><ElementsFormInput class="-block" /></td>
      </tr>
    </BlocksFormTable>
    <BlocksHeading>試合形式</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>予選</th>
        <td>
          <ElementsFormSelectButton>予選リーグを開催</ElementsFormSelectButton>
          <BlocksFormTable>
            <tr>
              <th>先取点</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>第1セット</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>第2セット</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>第3セット</th>
              <td><ElementsFormInput /></td>
            </tr>
          </BlocksFormTable>
          <hr />
          <BlocksFormTable>
            <tr>
              <th>1ブロックの最大チーム数</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>予選通過順位</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>予選規模</th>
              <td>16〜24ブロック、決勝進出32〜48チームの予選になります。</td>
            </tr>
          </BlocksFormTable>
        </td>
      </tr>
      <tr>
        <th>本戦</th>
        <td>
          <ElementsFormSelectButton type="radio"
            >シングルエリミネーション</ElementsFormSelectButton
          >
          <ElementsFormSelectButton type="radio"
            >ダブルエリミネーション</ElementsFormSelectButton
          >
          <BlocksFormTable>
            <tr>
              <th>先取点</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>第1セット</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>第2セット</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>第3セット</th>
              <td><ElementsFormInput /></td>
            </tr>
          </BlocksFormTable>
          <ElementsFormSelectButton
            >決勝戦のルールだけ変更する</ElementsFormSelectButton
          >
          <BlocksFormTable>
            <tr>
              <th>先取点</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>第1セット</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>第2セット</th>
              <td><ElementsFormInput /></td>
            </tr>
            <tr>
              <th>第3セット</th>
              <td><ElementsFormInput /></td>
            </tr>
          </BlocksFormTable>
          <BlocksFormTable>
            <tr>
              <th>組み合わせ</th>
              <td>
                <ElementsFormSelect /><br />
                <ElementsFormSelectButton
                  >ベスト8シャッフル</ElementsFormSelectButton
                >
              </td>
            </tr>
            <tr>
              <th>3位決定選</th>
              <td>
                <ElementsFormSelectButton>実施する</ElementsFormSelectButton>
              </td>
            </tr>
          </BlocksFormTable>
        </td>
      </tr>
    </BlocksFormTable>
    <BlocksHeading>公認大会申請</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>申請</th>
        <td></td>
      </tr>
    </BlocksFormTable>
    <BlocksHeading>公開設定</BlocksHeading>
    <BlocksFormTable>
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
          <ElementsButton @click="modalState = true" class="-link">大会を削除する</ElementsButton>
        </li></BlocksList
      >
    </BlocksInformation>
  </div>
</template>

<script setup>
const modalState = useDeleteTournamentModalState()
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
