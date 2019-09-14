<template lang="pug">
  .container
    .search
      .search-box
        v-select(label="ジャンル検索" :items="genre" multiple)
      .search-box
        SearchByKeyword(@filtering="keywordFiltering")
    v-timeline.timeline
      transition-group.card-area(name="card")
        CardOnTimeline(v-for="content in filteredContents"
                       :key="content.id"
                       :content="content")
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
      genre: ['main', 'it', 'arch', 'hobby'],
      contents: [
        {
          id: 1,
          title: 'サイト作成',
          text: 'a',
          date: '2019',
          genre: 'it'
        },
        {
          id: 2,
          title: '大学入学',
          text: 'ab',
          date: '2013',
          genre: 'arch'
        },
        {
          id: 3,
          title: 'エレクトーンを始める',
          text: 'bc',
          date: '1999',
          genre: 'hobby'
        },
        {
          id: 4,
          title: '誕生',
          text: 'abc',
          date: '1994',
          genre: 'main'
        }
      ],
      filteredContents: null
    }
  },
  methods: {
    keywordFiltering: function(keyword) {
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
.card-move {
  transition: opacity 0s, transform 1s;
}
.card-enter, .card-leave-to {
  opacity: 0;
}
.card-leave-active {
  position: absolute;
}
</style>
