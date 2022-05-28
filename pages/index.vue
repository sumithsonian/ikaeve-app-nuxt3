<template>
  <div>
    <BlocksHeading>エレメント: 見出し系</BlocksHeading>
    <BlocksLocalHeader>見出し</BlocksLocalHeader>
    <BlocksHeading>小見出し</BlocksHeading>
    <BlocksHeading>エレメント: ヒーロー系</BlocksHeading>
    <TheHero />
    <BlocksHero
      name="大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名大会名"
      image-url="https://placehold.jp/150x150.png"
      background-image-url="https://placehold.jp/1080x360.png"
    />
    <BlocksHero
      name="大会主催団体名"
      background-image-url="https://placehold.jp/1080x360.png"
    />
    <BlocksHero
      name="大会参加チーム名"
      image-url="https://placehold.jp/150x150.png"
      background-image-url="https://placehold.jp/1080x360.png"
    />
    <BlocksHero
      name="大会シリーズ名"
      background-image-url="https://placehold.jp/1080x360.png"
    />
    <BlocksHeading>エレメント: ナビ系</BlocksHeading>
    <BlocksTab />
    <BlocksIndexNav />
    <BlocksFilter />
    <BlocksHeading>エレメント: ボタン系</BlocksHeading>
    <BlocksList>
      <li><ElementsButton class="-primary">大会を開催する</ElementsButton></li>
      <li><ElementsButton>全ての大会をみる</ElementsButton></li>
      <li>
        <ElementsButton class="-twitter"
          >Twitterで新規会員登録 / ログイン</ElementsButton
        >
      </li>
      <li>
        <ElementsButton class="-circle -withText"
          ><span class="material-icons"> ios_share </span
          ><ElementsText class="-xxsmall">シェア</ElementsText></ElementsButton
        >
      </li>
      <li>
        <ElementsButton class="-circle -primary -withText"
          ><span class="material-icons"> add </span
          ><ElementsText class="-xxsmall"
            >大会開催</ElementsText
          ></ElementsButton
        >
      </li>
      <li>
        <ElementsButton class="-circle -primary"
          ><span class="material-icons">
            keyboard_arrow_left
          </span></ElementsButton
        >
      </li>
      <li>
        <ElementsButton class="-circle -primary"
          ><span class="material-icons">
            keyboard_arrow_right
          </span></ElementsButton
        >
      </li>
    </BlocksList>

    <BlocksHeading>リスト系</BlocksHeading>
    <BlocksList class="-horizontal">
      <li><BlocksCard /></li>
      <li><BlocksCard /></li>
      <li><BlocksCard /></li>
      <li><BlocksCard /></li>
      <li><BlocksCard /></li>
    </BlocksList>
    <BlocksListTable />

    <BlocksList class="-disc">
      <li>リストリストリストリスト</li>
      <li>リストリストリストリスト</li>
      <li>リストリストリストリスト</li>
    </BlocksList>
    <BlocksList class="-decimal">
      <li>リストリストリストリスト</li>
      <li>リストリストリストリスト</li>
      <li>リストリストリストリスト</li>
    </BlocksList>

    <BlocksHeading>フォーム系</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>ゲームタイトル</th>
        <td>
          <ElementsFormSelectButton
            name="radio"
            id="1"
            type="radio"
            v-model="radio"
            >ゲームタイトル</ElementsFormSelectButton
          ><br />
          <ElementsFormSelectButton
            name="radio"
            id="2"
            type="radio"
            v-model="radio"
            >ゲームタイトル</ElementsFormSelectButton
          >
        </td>
      </tr>
      <tr>
        <th>ゲームタイトル</th>
        <td>
          <ElementsFormSelectButton
            name="checkbox"
            id="3"
            type="checkbox"
            v-model="check"
            >ゲームタイトル</ElementsFormSelectButton
          ><br />
          <ElementsFormSelectButton
            name="checkbox"
            id="4"
            type="checkbox"
            v-model="check"
            >ゲームタイトル</ElementsFormSelectButton
          >
        </td>
      </tr>
      <tr>
        <th>大会名</th>
        <td><ElementsFormInput placeholder="プレースホルダ" /></td>
      </tr>
      <tr>
        <th>大会概要</th>
        <td><ElementsFormInput :rows="5" placeholder="プレースホルダ" /></td>
      </tr>
      <tr>
        <th>大会概要</th>
        <td><ElementsFormSelect /></td>
      </tr>
      <tr>
        <th>大会画像</th>
        <td><input type="file" /></td>
      </tr>
    </BlocksFormTable>

    <BlocksHeading>テキスト系</BlocksHeading>
    <BlocksParagraph
      >通常テキスト通常テキスト通常テキスト通常テキスト通常テキスト通常テキスト通常テキスト通常テキスト通常テキスト</BlocksParagraph
    >
    <BlocksParagraph
      ><ElementsText class="-sub -small"
        >注釈テキスト注釈テキスト注釈テキスト注釈テキスト注釈テキスト注釈テキスト注釈テキスト注釈テキスト注釈テキスト注釈テキスト注釈テキスト注釈テキスト</ElementsText
      ></BlocksParagraph
    >
    <BlocksHeading>テーブル系</BlocksHeading>
    <BlocksTable>
      <template #tbody>
        <tr>
          <th>項目</th>
          <td>セル</td>
        </tr>
        <tr>
          <th>項目</th>
          <td>セル</td>
        </tr>
        <tr>
          <th>項目</th>
          <td>セル</td>
        </tr>
      </template>
    </BlocksTable>
    <BlocksHeading>特殊系</BlocksHeading>
    <BlocksHeading>モーダル系</BlocksHeading>
    <BlocksModal>
      <BlocksParagraph
        >通常テキスト通常テキスト通常テキスト通常テキスト通常テキスト通常テキスト通常テキスト通常テキスト通常テキスト</BlocksParagraph
      >
    </BlocksModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: false,
      check: false,
    }
  },
}
</script>
