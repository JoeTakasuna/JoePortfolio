<template lang="pug">
  .container
    v-layout(wrap)
      v-flex.search-box-area(xs12 sm6 md6)
        v-select(label="ソート"
                 :items="sortItems"
                 prepend-inner-icon="sort"
                 disabled)
      v-flex.search-box-area(xs12 sm6 md6)
        SearchByKeyword(@filtering="keywordFiltering")
    v-layout(wrap)
      v-flex.search-button-area(xs3 sm3 md3
                                v-for="(tech, index) in techs"
                                :key="index")
        ImageButton.search-button(@filtering="techFiltering"
                    :id="index"
                    :image="tech.img"
                    width="48"
                    height="48"
                    :selectedOnFilter="selectedTechOnFilter==index")
    transition-group.card-area(name="card")
      CardOnGrid(v-for="content in filteredContents"
                 :key="content.id"
                 :content="content"
                 :techs="techs"
                 width="240"
                 height="280")
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
      // imgの基本サイズは2880*1800（フルスクリーン）
      contents: [
        {
          id: 1,
          title: '息抜きの折り紙',
          text: '中学生の頃に作った作品サイト',
          img: require('@/assets/works/ikinuki.png'),
          techs: {python: 0, js: 0, ruby: 0, vue: 0, rails: 0, gas: 0, other: 1}
        },
        {
          id: 2,
          title: '2019年を目指せ!!',
          text: '亥年正月企画ゲーム',
          img: require('@/assets/works/2019.png'),
          techs: {python: 0, js: 1, ruby: 0, vue: 0, rails: 0, gas: 0, other: 0}
        },
        {
          id: 3,
          title: 'Easy Job Hunt',
          text: '就活の情報管理支援サイト',
          img: require('@/assets/works/easyjobhunt.png'),
          techs: {python: 0, js: 0, ruby: 1, vue: 0, rails: 1, gas: 0, other: 0}
        },
        {
          id: 4,
          title: 'お茶たろう',
          text: 'SlackとRECEPTIONISTと繋ぐbot',
          img: require('@/assets/works/ochataro.png'),
          techs: {python: 0, js: 0, ruby: 0, vue: 0, rails: 0, gas: 1, other: 0}
        },
        {
          id: 5,
          title: '小松ブロックス',
          text: '名作ボードゲーム「Blokus」',
          img: require('@/assets/works/komatsuBlokus.gif'),
          techs: {python: 1, js: 0, ruby: 0, vue: 0, rails: 0, gas: 0, other: 0}
        },
        {
          id: 6,
          title: 'Graffiti Online',
          text: '世界のWeb上にグラフィティを',
          img: require('@/assets/works/graffitiOnline.png'),
          techs: {python: 0, js: 1, ruby: 1, vue: 1, rails: 1, gas: 0, other: 0}
        },
        {
          id: 7,
          title: 'Real Tweet',
          text: 'ひとりごとで自動ツイート',
          img: require('@/assets/works/realTweet.png'),
          techs: {python: 0, js: 0, ruby: 1, vue: 0, rails: 1, gas: 0, other: 1}
        },
        {
          id: 8,
          title: 'Kanafan',
          text: '役者である友人のファンサイト',
          img: require('@/assets/works/kanafan.png'),
          techs: {python: 0, js: 1, ruby: 0, vue: 1, rails: 0, gas: 0, other: 0}
        },
        {
          id: 9,
          title: '営業支援システム',
          text: 'インサイドセールスに特化',
          techs: {python: 0, js: 1, ruby: 1, vue: 1, rails: 1, gas: 0, other: 0}
        }
      ],
      filteredContents: null,
      sortItems: [],
      techs: {
        all: {
          name: 'All',
          img: require('@/assets/techs/all.png'),
          selectedOnFilter: false
        },
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
          name: 'OTHER',
          img: require('@/assets/techs/other.png'),
          selectedOnFilter: false
        }
      },
      selectedTechOnFilter: null
    }
  },
  methods: {
    keywordFiltering: function(keyword) {
      if (keyword === null) {
        this.filteredContents = this.contents
      } else {
        this.filteredContents = this.contents.filter(content => {
          return content.title.indexOf(keyword) != -1 || content.text.indexOf(keyword) != -1
        })
      }
    },
    techFiltering: function(tech) {
      if (tech === 'all' || tech === this.selectedTechOnFilter) {
        this.filteredContents = this.contents
        this.selectedTechOnFilter = null
      } else {
        this.filteredContents = this.contents.filter(content => {
          return content.techs[tech]
        })
        this.selectedTechOnFilter = tech
      }
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
.search-box-area {
  width: 216px;
  padding: 0 12px;
}
.search-button-area {
  display: flex;
  justify-content: center;
}
.search-button {
  margin: 6px;
}
.card-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card-move {
  transition: opacity 500ms, transform 1s;
}
.card-enter, .card-leave-to {
  opacity: 0;
}
.card-leave-active {
  position: absolute;
}
</style>
