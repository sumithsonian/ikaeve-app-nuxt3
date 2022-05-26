<template>
  <div class="index">
    <ul>
      <li>
        <button>
          <span>ナビ</span
          ><span class="material-icons"> keyboard_arrow_down </span>
        </button>
      </li>
      <li>
        <button>
          <span>ナビ</span
          ><span class="material-icons"> keyboard_arrow_down </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.index ul {
  background: $color-gray-10;
  display: flex;
  justify-content: space-between;
  li {
    flex: 1;
    button {
      display: flex;
      padding: $space;
      width: 100%;
      box-sizing: border-box;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
