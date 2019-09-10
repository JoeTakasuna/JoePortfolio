<template lang="pug">
  .container
    v-card.card(
      v-for="(content, index) in contents"
      :content="content"
      :key="index"
      :width="width"
      :height="height"
      )
      v-img(:src="content.img")
      v-card-title {{ content.title }}
      v-card-text {{ content.text }}
</template>

<script>
export default {
  name: 'WorkCard',
  data () {
    return {
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
      ]
    }
  },
  props: {
    width: String,
    height: String
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card {
  margin: 12px;
}
</style>
