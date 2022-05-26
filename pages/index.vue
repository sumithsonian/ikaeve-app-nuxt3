<template>
  <div>
    <ProjectsHero />
    <ProjectsLocalHeader>見出し</ProjectsLocalHeader>
    <BlocksHeading>小見出し</BlocksHeading>
    <BlocksTab />
    <BlocksIndexNav />
    <BlocksFilter />
    <BlocksList>
      <li><ElementsBtn class="-primary">大会を開催する</ElementsBtn></li>
      <li><ElementsBtn>全ての大会をみる</ElementsBtn></li>
      <li>
        <ElementsBtn class="-twitter"
          >Twitterで新規会員登録 / ログイン</ElementsBtn
        >
      </li>
      <li>
        <ElementsBtn class="-circle -withTxt"
          ><span class="material-icons"> ios_share </span
          ><ElementsTxt class="-xxsmall">シェア</ElementsTxt></ElementsBtn
        >
      </li>
      <li>
        <ElementsBtn class="-circle -primary -withTxt"
          ><span class="material-icons"> add </span
          ><ElementsTxt class="-xxsmall">大会開催</ElementsTxt></ElementsBtn
        >
      </li>
      <li>
        <ElementsBtn class="-circle -primary"
          ><span class="material-icons">
            keyboard_arrow_left
          </span></ElementsBtn
        >
      </li>
      <li>
        <ElementsBtn class="-circle -primary"
          ><span class="material-icons">
            keyboard_arrow_right
          </span></ElementsBtn
        >
      </li>
    </BlocksList>

    <BlocksList class="-horizontal">
      <li><ProjectsCard /></li>
      <li><ProjectsCard /></li>
      <li><ProjectsCard /></li>
      <li><ProjectsCard /></li>
      <li><ProjectsCard /></li>
    </BlocksList>

    <ProjectsRanking />
  </div>
</template>
