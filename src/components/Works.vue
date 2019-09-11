<template lang="pug">
  .container
    .search-area
      .search
        .search-box
          v-select(label="ソート" prepend-inner-icon="sort")
        .search-box
          SearchByKeyword(@filtering="filtering")
      .image-button-area
        ImageButton(v-for="tech in techs" :image="tech.img")
    transition-group.card-area(name="flip")
      CardOnGrid(v-for="content in filteredContents" :key="content.id" :content="content" width="240px" height="240px")
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
          text: 'だいちをつくれます',
          img: require('@/assets/works/3.jpg'),
        },
        {
          id: 4,
          title: '海',
          text: 'しょっぱいです',
          img: require('@/assets/works/4.jpg'),
        },
        {
          id: 5,
          title: '工房',
          text: 'ぶきをつくれます',
          img: require('@/assets/works/5.jpg'),
        },
        {
          id: 6,
          title: '村',
          text: 'ひとがいます',
          img: require('@/assets/works/6.jpg'),
        }
      ],
      filteredContents: null,
      techs: [
        {
          name: 'Python',
          img: require('@/assets/techs/python.png')
        },
        {
          name: 'JavaScript',
          img: require('@/assets/techs/js.png')
        },
        {
          name: 'Ruby',
          img: require('@/assets/techs/ruby.png')
        },
        {
          name: 'Vue.js',
          img: require('@/assets/techs/vue.png')
        },
        {
          name: 'Ruby on Rails',
          img: require('@/assets/techs/rails.png')
        },
        {
          name: 'GAS',
          img: require('@/assets/techs/gas.png')
        },
        {
          name: 'other',
          img: require('@/assets/techs/other.png')
        }
      ]
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
      })
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
