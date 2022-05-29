<template>
  <div class="appNav">
    <nav>
      <ul>
        <li>
          <nuxt-link href="/"
            ><ElementsIcon> home </ElementsIcon
            ><ElementsText class="-xsmall">ホーム</ElementsText></nuxt-link
          >
        </li>
        <li>
          <nuxt-link href="/ranking/"
            ><ElementsIcon> insights </ElementsIcon
            ><ElementsText class="-xsmall">ランキング</ElementsText></nuxt-link
          >
        </li>
        <li>
          <nuxt-link href="/tournaments/"
            ><ElementsIcon> military_tech </ElementsIcon
            ><ElementsText class="-xsmall">大会</ElementsText></nuxt-link
          >
        </li>
        <li>
          <nuxt-link href="/teams/"
            ><ElementsIcon> people </ElementsIcon
            ><ElementsText class="-xsmall">チーム/団体</ElementsText></nuxt-link
          >
        </li>
        <li>
          <button @click="open">
            <ElementsIcon> menu </ElementsIcon
            ><ElementsText class="-xsmall">メニュー</ElementsText>
          </button>
        </li>
      </ul>
    </nav>
    <div @click="close" v-if="isActive" class="appNav__overlay"></div>
    <div v-if="isActive" class="appNav__drawer">
      <div class="appNav__drawer__actions">
        <button @click="close"><ElementsIcon>close</ElementsIcon></button>
      </div>
      <ul class="appNav__drawer__menu">
        <li>
          <nuxt-link to="/"
            ><ElementsIcon> home </ElementsIcon> ホーム</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/ranking/"
            ><ElementsIcon> insights </ElementsIcon> ランキング</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/tournaments/"
            ><ElementsIcon> military_tech </ElementsIcon> 大会一覧</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/teams/"
            ><ElementsIcon> people </ElementsIcon> チーム/団体一覧</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/players/"
            ><ElementsIcon> person </ElementsIcon> ユーザー一覧</nuxt-link
          >
        </li>
        <li><nuxt-link to="/about">イカイベとは？</nuxt-link></li>
        <li><nuxt-link to="/terms">ご利用規約</nuxt-link></li>
        <li><nuxt-link to="/privacy">プライバシーポリシー</nuxt-link></li>
        <li>
          <nuxt-link to="/tournaments/create"
            ><ElementsIcon> add </ElementsIcon> 大会作成</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/teams/create"
            ><ElementsIcon> add </ElementsIcon> チーム/団体作成</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/"
            ><ElementsIcon> logout </ElementsIcon> ログアウト</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/"
            ><ElementsIcon> login </ElementsIcon>
            新規会員登録/ログイン</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isActive: false }
  },
  methods: {
    open() {
      this.isActive = true
    },
    close() {
      this.isActive = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.appNav {
  nav ul {
    display: flex;
    background: $color-gray-10;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      a,
      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: $space-small;
        width: 100%;
        box-sizing: border-box;
        border: 2px solid transparent;
        border-right: none;
        border-left: none;
        &.router-link-exact-active {
          border-top-color: $color-primary;
        }
      }
    }
  }
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba($color-black, 0.5);
  }
  &__drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    ul {
      background: $color-gray-09;
      height: 100vh;
      li {
        a {
          display: flex;
          align-items: center;
          padding: $space;
          span {
            margin-right: $space;
          }
        }
      }
    }
  }
}
</style>
