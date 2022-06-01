<template>
  <div class="platform">
    <TheHeader class="platform__header" />
    <main class="platform__contents"><slot /></main>
    <TheAppBar class="platform__footer" />
    <TheFloatingActionButtons class="platform__actionBtns" />
    <ProjectsModalsLogin />
    <ProjectsModalsTournamentRule />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

.platform {
  background: $color-gray-01;
  max-width: map-get($breakpoints, medium);
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  background: $color-gray-09;
  box-shadow: 0 0 $space-large rgba(0, 0, 0, 0.4);
  &__footer {
    position: sticky;
    bottom: 0;
    margin-top: auto;
  }
}
</style>
