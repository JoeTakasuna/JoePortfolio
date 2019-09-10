<template lang="pug">
  .container
    v-btn(@click="shuffle") Shuffle
    transition-group(name="flip-list")
      v-card.card(
        v-for="(content, index) in filteredContents"
        :content="content"
        :key="content"
        :width="width"
        :height="height"
        )
        v-img(:src="content.img")
        v-card-title {{ content.title }}
        v-card-text {{ content.text }}
    p {{ message }}
</template>

<script>
import _ from 'lodash'

export default {
  name: 'WorkCard',
  data () {
    return {
      message: '',
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
      filteredContents: null
    }
  },
  props: {
    width: String,
    height: String,
    keyword: String
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
.container {
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */
}
.card {
  margin: 12px;
}
.flip-list-move {
  transition: transform 1s;
}
</style>
