<template>
  <div>
    <BlocksHeading>基本情報</BlocksHeading>
    <BlocksFormTable>
      <tr>
        <th>ユーザー名</th>
        <td><ElementsFormInput /></td>
      </tr>
      <tr>
        <th>プロフィール画像</th>
        <td><input type="file" /></td>
      </tr>
      <tr>
        <th>プロフィールアイコン</th>
        <td><input type="file" /></td>
      </tr>
      <tr>
        <th>コメント</th>
        <td><ElementsFormInput :rows="6" /></td>
      </tr>
      <tr>
        <th>フレンドコード</th>
        <td><ElementsFormInput /></td>
      </tr>
      <tr>
        <th>公開設定</th>
        <td>
          <ElementsFormSelectButton type="radio">公開</ElementsFormSelectButton>
          <ElementsFormSelectButton type="radio"
            >限定公開</ElementsFormSelectButton
          >
        </td>
      </tr>
    </BlocksFormTable>
    <BlocksInformation>
      <BlocksList class="-center">
        <li>
          <ElementsButton class="-primary -large">保存する</ElementsButton>
        </li></BlocksList
      >
    </BlocksInformation>
  </div>
</template>
