<template>
  <div>
    <BlocksHeading>基本情報</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>対象タイトル</th>
        <td>
          <ul>
            <li>
              <ElementsFormSelectButton type="radio"
                >スプラトゥーン3</ElementsFormSelectButton
              >
            </li>
            <li>
              <ElementsFormSelectButton type="radio"
                >スプラトゥーン2</ElementsFormSelectButton
              >
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>主催者</th>
        <td>
          <ElementsFormSelect
            :items="[{ value: 1, name: 'イカイベ運営チーム' }]"
            class="-button"
          />
        </td>
      </tr>
      <tr>
        <th>大会シリーズ</th>
        <td>
          <ElementsFormSelect
            :items="[
              { value: 1, name: 'エリア杯' },
              { value: 2, name: 'ヤグラ杯' },
              { value: 3, name: 'ホコ杯' },
            ]"
            class="-button"
          />
          <ElementsAttention
            >大会シリーズは、大会をまとめて表示したり、ランキング対象となる公認大会の申請が可能になる機能です。<br />
            <nuxt-link to="/tournament-series/create" target="_blank">大会シリーズ作成はこちら</nuxt-link></ElementsAttention
          >
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
        <th>募集チーム数</th>
        <td><ElementsFormInput />〜<ElementsFormInput /></td>
      </tr>
      <tr>
        <th>チーム人数</th>
        <td>
          <ElementsFormSelect
            :items="[
              { value: 4, name: '4名' },
              { value: 2, name: '2名' },
            ]"
            class="-button"
          />
        </td>
      </tr>
      <tr>
        <th>配信URL</th>
        <td><ElementsFormInput class="-block" /></td>
      </tr>
      <tr>
        <th>大会概要</th>
        <td><ElementsFormInput rows="10" class="-block" /></td>
      </tr>
    </BlocksFormTable>
    <BlocksHeading>大会ルール</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>形式</th>
        <td>
          <ElementsFormSelectButton
            >予選リーグを開催する</ElementsFormSelectButton
          >
        </td>
      </tr>
    </BlocksFormTable>
    <BlocksFormTable>
      <tr>
        <th>予選</th>
        <td>
          <BlocksFormTable>
            <tr>
              <th>方式</th>
              <td>
                <ElementsFormSelectButton type="radio"
                  >リーグ戦（ラウンドロビン）</ElementsFormSelectButton
                >
              </td>
            </tr>
            <tr>
              <th>1ブロックの<wbr />チーム数</th>
              <td><ElementsFormInput />（最大8チーム）</td>
            </tr>
            <tr>
              <th>予選通過順位</th>
              <td><ElementsFormInput type="number" /></td>
            </tr>
            <tr>
              <th>予選規模</th>
              <td>
                <ElementsAttention
                  >16〜24ブロック、決勝進出32〜48チームの予選になります。</ElementsAttention
                >
              </td>
            </tr>
          </BlocksFormTable>

          <BlocksFormTable>
            <tr>
              <th>先取点</th>
              <td><ElementsFormInput type="number" />（BO3）</td>
            </tr>
            <tr v-for="(set, i) of [1, 2, 3]" :key="i">
              <th>第{{ set }}セットルール</th>
              <td>
                <ElementsFormSelect
                  :items="[
                    { value: 1, name: 'エリア' },
                    { value: 2, name: 'ホコバトル' },
                    { value: 3, name: 'ヤグラ' },
                    { value: 4, name: 'アサリ' },
                    { value: 5, name: 'ナワバリ' },
                  ]"
                  class="-button"
                />
                <ElementsFormSelect
                  :items="[
                    { value: 1, name: '全ステージおまかせ（ロストあり）' },
                    { value: 2, name: '全ステージおまかせ（ロストなし）' },
                  ]"
                  class="-button"
                />
              </td>
            </tr>
          </BlocksFormTable>
        </td>
      </tr>
    </BlocksFormTable>
    <BlocksFormTable>
      <tr>
        <th>本戦</th>
        <td>
          <BlocksFormTable>
            <tr>
              <th>方式</th>
              <td>
                <ul>
                  <li>
                    <ElementsFormSelectButton type="radio"
                      >シングルエリミネーション</ElementsFormSelectButton
                    >
                  </li>
                  <li>
                    <ElementsFormSelectButton type="radio"
                      >ダブルエリミネーション</ElementsFormSelectButton
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>組み合わせ</th>
              <td>
                <ElementsFormSelect
                  :items="[
                    { value: 1, name: '自動（1位抜け降順、2位抜け昇順）' },
                    { value: 2, name: '申請順' },
                    { value: 3, name: '平均Xパワー順' },
                    { value: 4, name: 'シャッフル' },
                  ]"
                  class="-button"
                /><br />
                <ElementsFormSelectButton
                  >ベスト8シャッフル</ElementsFormSelectButton
                >
              </td>
            </tr>
            <tr>
              <th>3位決定戦</th>
              <td>
                <ElementsFormSelectButton
                  >3位決定戦を実施する</ElementsFormSelectButton
                >
              </td>
            </tr>
            <tr>
              <th>決勝戦</th>
              <td>
                <ElementsFormSelectButton
                  >決勝戦のルールだけ変更する</ElementsFormSelectButton
                >
              </td>
            </tr>
          </BlocksFormTable>
          <BlocksFormTable>
            <tr>
              <th>先取点</th>
              <td><ElementsFormInput />（BO3）</td>
            </tr>
            <tr v-for="(set, i) of [1, 2, 3]" :key="i">
              <th>第{{ set }}セットルール</th>
              <td>
                <ElementsFormSelect
                  :items="[
                    { value: 1, name: 'エリア' },
                    { value: 2, name: 'ホコバトル' },
                    { value: 3, name: 'ヤグラ' },
                    { value: 4, name: 'アサリ' },
                    { value: 5, name: 'ナワバリ' },
                  ]"
                  class="-button"
                />
                <ElementsFormSelect
                  :items="[
                    { value: 1, name: '全ステージおまかせ（ロストあり）' },
                    { value: 2, name: '全ステージおまかせ（ロストなし）' },
                  ]"
                  class="-button"
                />
              </td>
            </tr>
          </BlocksFormTable>
          <BlocksFormTable>
            <tr>
              <th>先取点</th>
              <td><ElementsFormInput />（BO3）</td>
            </tr>
            <tr v-for="(set, i) of [1, 2, 3]" :key="i">
              <th>第{{ set }}セットルール</th>
              <td>
                <ElementsFormSelect
                  :items="[
                    { value: 1, name: 'エリア' },
                    { value: 2, name: 'ホコバトル' },
                    { value: 3, name: 'ヤグラ' },
                    { value: 4, name: 'アサリ' },
                    { value: 5, name: 'ナワバリ' },
                  ]"
                  class="-button"
                />
                <ElementsFormSelect
                  :items="[
                    { value: 1, name: '全ステージおまかせ（ロストあり）' },
                    { value: 2, name: '全ステージおまかせ（ロストなし）' },
                  ]"
                  class="-button"
                />
              </td>
            </tr>
          </BlocksFormTable>
        </td>
      </tr>
    </BlocksFormTable>
    <BlocksHeading>その他</BlocksHeading>
    <BlocksFormTable>
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
          <ElementsButton @click="modalState = true" class="-link"
            >大会を削除する</ElementsButton
          >
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
