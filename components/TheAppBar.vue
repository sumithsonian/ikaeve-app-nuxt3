<template>
  <div class="appNav">
    <nav>
      <ul>
        <li>
          <nuxt-link to="/" exact
            ><ElementsIcon> home </ElementsIcon
            ><ElementsText class="-xsmall">ホーム</ElementsText></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/ranking/"
            ><ElementsIcon> insights </ElementsIcon
            ><ElementsText class="-xsmall">ランキング</ElementsText></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/tournaments/"
            ><ElementsIcon> military_tech </ElementsIcon
            ><ElementsText class="-xsmall">大会</ElementsText></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/teams/"
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
    <BlocksOverlay @click="close" v-if="isActive" />
    <div v-if="isActive" class="appNav__drawer">
      <div class="appNav__drawer__actionBtns">
        <button @click="close"><ElementsIcon>close</ElementsIcon></button>
      </div>
      <div class="appNav__drawer__menu">
        <ul>
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
            <nuxt-link to="/tournament-series/"
              ><ElementsIcon> military_tech </ElementsIcon>
              大会シリーズ一覧</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/teams/"
              ><ElementsIcon> people </ElementsIcon> チーム/団体一覧</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/players/"
              ><ElementsIcon> person </ElementsIcon> プレイヤー一覧</nuxt-link
            >
          </li>
        </ul>
        <ul>
          <li>
            <nuxt-link class="-small" to="/about"
              ><ElementsIcon> link </ElementsIcon>イカイベとは？</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="-small" to="/terms"
              ><ElementsIcon> link </ElementsIcon>ご利用規約</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="-small" to="/privacy"
              ><ElementsIcon> link </ElementsIcon>
              プライバシーポリシー</nuxt-link
            >
          </li>
        </ul>
        <ul>
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
            <nuxt-link to="/tournament-series/create"
              ><ElementsIcon> add </ElementsIcon> シリーズ作成</nuxt-link
            >
          </li>
          <li v-if="isLoggedIn">
            <nuxt-link to="/logout"
              ><ElementsIcon> logout </ElementsIcon> ログアウト</nuxt-link
            >
          </li>
          <li v-else>
            <nuxt-link to="/"
              ><ElementsIcon> login </ElementsIcon>
              新規会員登録/ログイン</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const isLoggedIn = useIsLoggedInState()
</script>

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
        padding: $space-small $space-xsmall;
        width: 100%;
        box-sizing: border-box;
        border: 2px solid transparent;
        border-right: none;
        border-left: none;
        &.router-link-active {
          border-top-color: $color-primary;
        }
      }
    }
  }
  &__drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    &__menu {
      background: $color-gray-09;
      height: 100vh;
      padding: $space;
      ul {
        border-bottom: 1px solid $color-gray-07;
        &:last-child {
          border: none;
        }
        li {
          a {
            display: flex;
            align-items: center;
            padding: $space 0;
            span {
              margin-right: $space;
            }
            &.-small {
              font-size: $font-xsmall;
              padding: $space-small 0;
            }
          }
        }
      }
    }
  }
}
</style>
