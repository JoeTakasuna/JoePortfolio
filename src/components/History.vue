<template lang="pug">
  .container
    v-layout(wrap).search
      v-flex(xs12 sm6 md6).search-box
        v-select(label="ジャンル検索"
                 v-model="selectedGenre"
                 :items="genre"
                 item-text="name"
                 item-value="id"
                 multiple)
      v-flex(xs12 sm6 md6).search-box
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
      selectedGenre: [],
      genre: [
        {
          id: 'main',
          name: 'メイン'
        },
        {
          id: 'it',
          name: 'IT'
        },
        {
          id: 'arch',
          name: '建築'
        },
        {
          id: 'hobby',
          name: '趣味'
        }
      ],
      contents: [
        {
          id: 1,
          title: '当サイト作成',
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
          date: '1998',
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
      filteredContents: []
    }
  },
  methods: {
    keywordFiltering: function(keyword) {
      if (keyword === null) {
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
  },
  watch: {
    selectedGenre: function() {
      if (this.selectedGenre.length === 0) {
        return this.filteredContents = this.contents
      }
      else {
        this.filteredContents = this.contents.filter(content => {
          return this.selectedGenre.indexOf(content.genre) >= 0
        })
      }
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
  width: 216px;
  padding: 0 12px;
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
