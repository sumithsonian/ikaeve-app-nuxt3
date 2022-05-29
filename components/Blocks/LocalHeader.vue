<template>
  <header>
    <h2><slot /></h2>
    <ul>
      <li>
        <button @click="$router.go(-1)">
          <ElementsIcon> arrow_back_ios </ElementsIcon>
        </button>
      </li>
    </ul>
  </header>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
header {
  background: $color-gray-10;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  h2 {
    font-size: $font;
    padding: $space 64px $space 0;
    flex: 1;
    text-align: center;
    color: $color-primary;
  }
  ul {
    width: 64px;
    box-sizing: border-box;
    padding-left: $space;
    a {
      color: $color-primary;
    }
  }
}
</style>
