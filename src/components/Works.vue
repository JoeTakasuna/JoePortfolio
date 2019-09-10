<template lang="pug">
  .container
    h1 技術と作品
    .search
      .search-box
        v-select(label="技術で検索" :items="techs" multiple)
      .search-box
        v-text-field(label="キーワード検索" prepend-inner-icon="search" v-model="keyword")
    p {{ message }}
    transition-group.card-area(name="flip")
        WorkCard(v-for="content in filteredContents" :key="content.id" :content="content" width="240px" height="240px")
</template>

<script>
import _ from 'lodash'
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
          id: 1,
          title: '酒場',
          text: 'おさけがのめます',
          img: require('@/assets/works/1.jpg'),
        },
        {
          id: 2,
          title: '遺跡',
          text: 'ひみつがあります',
          img: require('@/assets/works/2.jpg'),
        },
        {
          id: 3,
          title: '火山',
          text: 'だいちをつくります',
          img: require('@/assets/works/3.jpg'),
        }
      ],
      filteredContents: null,
      techs: ['Vue.js', 'Python', 'GAS'],
      keyword: '',
      message: '　'
    }
  },
  methods: {
    getAnswer: function() {
      if (this.keyword === '') {
        this.message = '　'
        this.filteredContents = this.contents
        return
      }
      this.message = '　'
      this.filteredContents = this.contents.filter( content => {
        return content.title.indexOf(this.keyword) != -1
          || content.text.indexOf(this.keyword) != -1
      })
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
.flip-move {
  transition: opacity 500ms, transform 1s;
}
.flip-enter, .flip-leave-to {
  opacity: 0;
}
.flip-leave-active {
  position: absolute;
}
</style>
