<template lang="pug">
  .container
    h1 経歴
    .search
      .search-box
        v-select(label="ジャンル検索" :items="genre" multiple)
      .search-box
        v-text-field(label="キーワード検索" prepend-inner-icon="search" v-model="keyword")
    p {{ message }}
    v-timeline.timeline
      TimelineCard(v-for="(content, index) in filteredContents" :content="content" :key="index")
</template>

<script>
import _ from 'lodash'
import TimelineCard from './parts/TimelineCard.vue'

export default {
  name: 'History',
  components: {
    TimelineCard
  },
  data () {
    return {
      contents: [
        {
          title: 'サイト作成',
          text: 'わーーーーい',
          date: '2019',
          color: 'red'
        },
        {
          title: '大学入学',
          text: 'やったーーーーーーー',
          date: '2013',
          color: 'green'
        },
        {
          title: 'エレクトーンを始める',
          text: '楽しい',
          date: '1999',
          color: 'blue'
        },
        {
          title: '誕生',
          text: 'いえーーーーーーい',
          date: '1994',
          color: 'red'
        }
      ],
      filteredContents: null,
      genre: ['IT', '建築', '趣味'],
      keyword: '',
      message: '　'
    }
  },
  methods: {
    filtering: function() {
      if (this.keyword === '') {
        this.message = '　'
        this.filteredContents = this.contents
        return
      }
      this.message = '　'
      this.filteredContents = this.contents.filter( content => {
        return content.title.indexOf(this.keyword) != -1
          || content.text.indexOf(this.keyword) != -1
          || content.date.indexOf(this.keyword) != -1
      })
    }
  },
  created: function() {
    this.filteredContents = this.contents
    this.debouncedFiltering = _.debounce(this.filtering, 1000)
  },
  watch: {
    keyword: function() {
      this.message = 'Waiting for you to stop typing...'
      this.debouncedFiltering()
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search {
  display: flex;
}
.search-box {
  max-width: 30vw;
  margin: 12px;
}
.timeline {
  width: 60vw;
}
</style>
