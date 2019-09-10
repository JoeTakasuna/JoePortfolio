<template lang="pug">
  .container
    h1 技術と作品
    .search
      .search-box
        v-select(label="技術で検索" :items="techs" multiple)
      .search-box
        v-text-field(label="キーワード検索" prepend-inner-icon="search" v-model="keyword")
    .card-area(v-for="content in filteredContents")
      WorkCard(:content="content" width="240px" height="240px")
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
      contents: [
        {
          title: '酒場',
          text: 'おさけがのめます',
          img: require('@/assets/works/1.jpg'),
        },
        {
          title: '遺跡',
          text: 'ひみつがあります',
          img: require('@/assets/works/2.jpg'),
        },
        {
          title: '火山',
          text: 'だいちをつくります',
          img: require('@/assets/works/3.jpg'),
        }
      ],
      filteredContents: null,
      techs: ['Vue.js', 'Python', 'GAS'],
      keyword: '',
      message: ''
    }
  },
  methods: {
    getAnswer: function() {
      if (this.keyword === '') {
        this.message = ''
        this.filteredContents = this.contents
        return
      }
      this.message = ''
      this.filteredContents = [this.contents[1], this.contents[2]]
    },
    shuffle: function () {
      this.filteredContents = _.shuffle(this.filteredContents)
    }
  },
  created: function() {
    this.filteredContents = this.contents
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  watch: {
    keyword: function() {
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
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
.card-area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
