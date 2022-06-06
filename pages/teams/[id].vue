<template>
  <div>
    <template v-if="!route.path.includes('edit')">
      <BlocksHero
        :name="team.name"
        :image-url="team.image_url"
        :background-image-url="team.background_image_url"
        :twitter-url="team.twitter_url"
        :discord-url="team.discord_url"
        :detail-url="`/teams/${team.id}`"
      />
      <ProjectsTabsTeam :id="team.id" :type="team.type" />
    </template>
    <NuxtPage :team="team" />
    <template v-if="!route.path.includes('edit')">
      <BlocksInformation>
        <BlocksList class="-horizontal -center">
          <li>
            <ElementsButton class="-primary"
              >メンバー募集リンクを<br />コピー</ElementsButton
            >
          </li>
        </BlocksList>
        <BlocksList class="-horizontal -center">
          <li>
            <ElementsButton @click="modalState = true" class="-primary"
              >チームにエントリーする</ElementsButton
            >
          </li>
        </BlocksList>
      </BlocksInformation>
    </template>
  </div>
</template>

<script setup>
const route = useRoute()
const modalState = useEntryTeamModalState()
const team = (await $fetch(`/api/teams/${route.params.id}`)).data
const title = team.name
useHead({
  title: title,
})
</script>
