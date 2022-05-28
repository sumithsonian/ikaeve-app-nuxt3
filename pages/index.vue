<template>
  <div>
    <TheHero />
    <BlocksHeading>募集中の大会</BlocksHeading>
    <BlocksList class="-horizontal">
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
    </BlocksList>
    <BlocksList class="-center">
      <li>
        <ElementsButton to="/tournaments">全ての大会をみる</ElementsButton>
      </li>
    </BlocksList>
    <BlocksHeading>開催中の大会</BlocksHeading>
    <BlocksList class="-horizontal">
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
      <li><ElementsCard /></li>
    </BlocksList>
    <BlocksList class="-center">
      <li>
        <ElementsButton to="/tournaments">全ての大会をみる</ElementsButton>
      </li>
    </BlocksList>
  </div>
</template>

<script setup>
useHead({
  title: 'イカイベ',
  titleTemplate: null,
})
</script>
