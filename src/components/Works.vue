<template lang="pug">
  .container
    .search-area
      .search
        .search-box
          v-select(label="ソート" prepend-inner-icon="sort")
        .search-box
          SearchByKeyword(@filtering="keywordFiltering")
      .image-button-area
        ImageButton(@filtering="techFiltering"
                    v-for="(tech, index) in techs"
                    :key="index"
                    :id="index"
                    :image="tech.img"
                    :selectedOnFilter="selectedTechOnFilter==index"
                    )
    transition-group.card-area(name="flip")
      CardOnGrid(v-for="content in filteredContents"
                 :key="content.id"
                 :content="content"
                 :techs="techs"
                 width="280px"
                 height="280px")
</template>

<script>
import SearchByKeyword from './parts/SearchByKeyword.vue'
import ImageButton from './parts/ImageButton.vue'
import CardOnGrid from './parts/CardOnGrid.vue'

export default {
  name: 'Works',
  components: {
    SearchByKeyword,
    ImageButton,
    CardOnGrid
  },
  data () {
    return {
      contents: [
        {
          id: 1,
          title: '息抜きの折り紙',
          text: '中学生の頃に作った作品公開サイト',
          img: require('@/assets/works/ikinuki.png'),
          techs: {python: 0, js: 0, ruby: 0, vue: 0, rails: 0, gas: 0, other: 1}
        },
        {
          id: 2,
          title: '2019年を目指せ!!',
          text: '亥年正月企画ゲーム',
          img: require('@/assets/works/newyear2019.png'),
          techs: {python: 0, js: 1, ruby: 0, vue: 0, rails: 0, gas: 0, other: 0}
        },
        {
          id: 3,
          title: 'Easy Job Hunt',
          text: '就活支援サイト',
          img: require('@/assets/works/easyjobhunt.png'),
          techs: {python: 0, js: 0, ruby: 1, vue: 0, rails: 1, gas: 0, other: 0}
        },
        {
          id: 4,
          title: 'Biscuet',
          text: '営業活動を最適化しよう',
          img: require('@/assets/works/biscuet.png'),
          techs: {python: 0, js: 1, ruby: 1, vue: 1, rails: 1, gas: 0, other: 0}
        },
        {
          id: 5,
          title: 'お茶たろう',
          text: 'SlackとRECEPTIONISTと繋ぐbot',
          img: require('@/assets/works/easyjobhunt.png'),
          techs: {python: 0, js: 0, ruby: 0, vue: 0, rails: 0, gas: 1, other: 0}
        },
        {
          id: 6,
          title: '小松ブロックス',
          text: '小松研で開発する名作ボードゲーム',
          img: require('@/assets/works/komatsuBlokus.gif'),
          techs: {python: 1, js: 0, ruby: 0, vue: 0, rails: 0, gas: 0, other: 0}
        },
        {
          id: 7,
          title: 'Graffiti Online',
          text: '世界中のWebサイトにグラフィティを',
          img: require('@/assets/works/graffitiOnline.png'),
          techs: {python: 0, js: 1, ruby: 1, vue: 1, rails: 1, gas: 0, other: 0}
        },
        {
          id: 8,
          title: 'Real Tweet',
          text: '日常のひとりごとで自動ツイート',
          img: require('@/assets/works/realTweet.png'),
          techs: {python: 0, js: 0, ruby: 1, vue: 0, rails: 1, gas: 0, other: 1}
        },
        {
          id: 9,
          title: 'Kanafan',
          text: '役者である友人のファンサイト',
          img: require('@/assets/works/kanafan.png'),
          techs: {python: 0, js: 1, ruby: 0, vue: 1, rails: 0, gas: 0, other: 0}
        }
      ],
      filteredContents: null,
      techs: {
        python: {
          name: 'Python',
          img: require('@/assets/techs/python.png'),
          selectedOnFilter: false
        },
        js: {
          name: 'JavaScript',
          img: require('@/assets/techs/js.png'),
          selectedOnFilter: false
        },
        ruby: {
          name: 'Ruby',
          img: require('@/assets/techs/ruby.png'),
          selectedOnFilter: false
        },
        vue: {
          name: 'Vue.js',
          img: require('@/assets/techs/vue.png'),
          selectedOnFilter: false
        },
        rails: {
          name: 'Ruby on Rails',
          img: require('@/assets/techs/rails.png'),
          selectedOnFilter: false
        },
        gas: {
          name: 'GAS',
          img: require('@/assets/techs/gas.png'),
          selectedOnFilter: false
        },
        other: {
          name: 'other',
          img: require('@/assets/techs/other.png'),
          selectedOnFilter: false
        }
      },
      selectedTechOnFilter: ''
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
      })
    },
    techFiltering: function(tech) {
      if (this.selectedTechOnFilter == tech) {
        this.filteredContents = this.contents
        this.selectedTechOnFilter = ''
      } else {
        this.filteredContents = this.contents.filter(content => {
          return content.techs[tech]
        })
        this.selectedTechOnFilter = tech
      }
    }
  },
  created: function() {
    this.filteredContents = this.contents
  }
};
</script>

<style scoped>
.search-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
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
