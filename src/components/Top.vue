<template lang="pug">
  .container
    v-btn(@click="shuffle") Shuffle
    transition-group.group(name="flip-list")
      //- v-card.card(
      //-   v-for="item in items"
      //-   :key="item"
      //-   ) {{ item }}
      //- WorkCard(v-for="(content, index) in filteredContents" :key="index" :content="content" width="240px" height="240px")
      v-card.card(v-for="(content, index) in filteredContents" :key="content" :content="content" width="240px" height="240px")
        v-img(:src="content.img")
        v-card-title {{ content.title }}
        v-card-text {{ content.text }}
</template>

<script>
import WorkCard from './parts/WorkCard.vue'

import _ from 'lodash'

export default {
  name: 'Top',
  components: {
    WorkCard
  },
  data () {
    return {
      items: [1,2,3,4,5,6,7,8,9],
      filteredContents: [
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
    }
  },
  methods: {
    shuffle: function () {
      this.filteredContents = _.shuffle(this.filteredContents)
    }
  }
};
</script>

<style scoped>
.group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.flip-list-move {
  transition: transform 1s;
}
.card {
  min-width: 60px;
}
</style>
