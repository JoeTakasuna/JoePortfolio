<template lang="pug">
  .container
    h1 経歴
    .search
      .search-box
        v-select(label="ジャンル検索" :items="genre" multiple)
      .search-box
        v-text-field(label="キーワード検索" prepend-inner-icon="search")
    v-timeline
      TimelineCard(v-for="(content, index) in contents" :content="content" :key="index")
</template>

<script>
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
          color: 'blue'
        },
        {
          title: '誕生',
          text: 'いえーーーーーーい',
          date: '1994',
          color: 'green'
        }
      ],
      genre: ['IT', '建築', '趣味']
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
</style>
