<template>
  <div>
    <template v-if="!route.path.includes('edit')">
      <BlocksHero
        :name="team.data.name"
        :image-url="team.data.image_url"
        :background-image-url="team.data.background_image_url"
        :twitter-url="team.data.twitter_url"
        :discord-url="team.data.discord_url"
        :detail-url="`/teams/${team.data.id}`"
        :is-owner="team.data.is_owner"
      />
      <ProjectsTabsTeam :id="team.data.id" :type="team.data.type" />
    </template>
    <NuxtPage :team="team.data" />
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
const { $fetch2 } = useNuxtApp()

const route = useRoute()
const modalState = useEntryTeamModalState()
const { data: team } = await $fetch2(`/api/teams/${route.params.id}`)
useHead({
  title: team.value.data.name,
})
</script>
