<template>
  <div>
    <template v-if="!route.path.includes('edit')">
      <BlocksHero
        :name="tournament.data.name"
        :background-image-url="tournament.data.background_image_url"
        :tags="tournament.data.tags"
        :detail-url="`/tournaments/${tournament.data.id}`"
        :is-owner="tournament.data.is_owner"
      />
      <ProjectsTabsTournament :id="tournament.data.id" />
    </template>
    <NuxtPage :tournament="tournament.data" />
    <template v-if="!route.path.includes('edit')">
      <BlocksInformation>
        <template v-if="tournament.data.status === 'recruiting'">
          <BlocksList class="-horizontal -center">
            <li>
              <ElementsButton class="-primary"
                >大会へのエントリーリンクをコピーする</ElementsButton
              >
            </li>
          </BlocksList>
          <BlocksList class="-horizontal -center">
            <li>
              <ElementsButton
                @click="entryTournamentModalState = true"
                class="-primary"
                >大会にエントリーする</ElementsButton
              >
            </li>
          </BlocksList>
          <BlocksList class="-horizontal -center">
            <li>
              <ElementsButton
                @click="cancelTournamentModalState = true"
                class="-primary"
                >大会のエントリーを取り消す</ElementsButton
              >
            </li>
          </BlocksList>
          <BlocksParagraph class="-center"
            ><ElementsText class="-small"
              >現在のエントリ数：12 / 128</ElementsText
            ></BlocksParagraph
          >
        </template>
        <template v-else-if="tournament.data.status === 'recruitment_closed'">
          <BlocksParagraph class="-center"
            >募集チームが揃いました</BlocksParagraph
          >
          <BlocksList class="-horizontal -center">
            <li>
              <ElementsButton
                :to="`/tournaments/${tournament.data.id}/qualifying`"
                class="-primary"
                >組み合わせの決定に進む</ElementsButton
              >
            </li>
          </BlocksList>
          <BlocksParagraph class="-center"
            >募集チームが定員に達しませんでした</BlocksParagraph
          >
          <BlocksList class="-horizontal -center">
            <li>
              <ElementsButton
                class="-primary"
                :to="`/tournaments/${tournament.data.id}/edit`"
                >期限を延ばす</ElementsButton
              >
            </li>
            <li>
              <ElementsButton
                class="-primary"
                :to="`/tournaments/${tournament.data.id}/edit`"
                >大会を中止する</ElementsButton
              >
            </li>
          </BlocksList>
        </template>
      </BlocksInformation>
    </template>
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()
const entryTournamentModalState = useEntryTournamentModalState()
const cancelTournamentModalState = useCancelTournamentModalState()
const { data: tournament } = await $fetch2(
  `/api/tournaments/${route.params.id}`,
)
const title = tournament.value.data.name
useHead({
  titleTemplate: `%s｜${title}｜イカイベ`,
})
</script>
