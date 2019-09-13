<template lang="pug">
  .container
    .search
      .search-box
        v-select(label="ジャンル検索" :items="genre" multiple)
      .search-box
        SearchByKeyword(@filtering="filtering")
    v-timeline.timeline
      transition-group.card-area(name="flip")
        CardOnTimeline(v-for="content in filteredContents" :key="content.id" :content="content")
</template>

<script>
import SearchByKeyword from './parts/SearchByKeyword.vue'
import CardOnTimeline from './parts/CardOnTimeline.vue'

export default {
  name: 'History',
  components: {
    SearchByKeyword,
    CardOnTimeline
  },
  data () {
    return {
      contents: [
        {
          id: 1,
          title: 'サイト作成',
          text: 'わーーーーい',
          date: '2019',
          color: 'red'
        },
        {
          id: 2,
          title: '大学入学',
          text: 'やったーーーーーーー',
          date: '2013',
          color: 'green'
        },
        {
          id: 3,
          title: 'エレクトーンを始める',
          text: '楽しい',
          date: '1999',
          color: 'blue'
        },
        {
          id: 4,
          title: '誕生',
          text: 'いえーーーーーーい',
          date: '1994',
          color: 'red'
        }
      ],
      filteredContents: null,
      genre: ['IT', '建築', '趣味']
    }
  },
  methods: {
    filtering: function(keyword) {
      if (keyword === '') {
        this.filteredContents = this.contents
        return
      }
      this.filteredContents = this.contents.filter(content => {
        return content.title.indexOf(keyword) != -1
          || content.text.indexOf(keyword) != -1
          || content.date.indexOf(this.keyword) != -1
      })
    }
  },
  mounted: function() {
    this.filteredContents = this.contents
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
.flip-move {
  transition: transform 1s;
}
/* .flip-enter, .flip-leave-to {
  opacity: 0;
} */
</style>
