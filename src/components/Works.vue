<template lang="pug">
  .container
    h1 技術と作品
    .search
      .search-box
        v-select(label="技術で検索" :items="techs" multiple)
      .search-box
        v-text-field(label="キーワード検索" prepend-inner-icon="search")
    WorkCard(width="240px" height="240px")
</template>

<script>
import WorkCard from './parts/WorkCard.vue'

export default {
  name: 'Works',
  components: {
    WorkCard
  },
  data () {
    return {
      techs: ['Vue.js', 'Python', 'GAS']
    }
  }
};
</script>

<style scoped>
.search {
  display: flex;
}
.search-box {
  max-width: 30vw;
  margin: 12px;
}
</style>
