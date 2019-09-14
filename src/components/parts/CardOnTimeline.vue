<template lang="pug">
  v-timeline-item(small :color="cardColor")
    template(v-slot:opposite)
      span(:class="`${cardColor}--text`") {{ content.date }}
    v-card
      v-card-title(:class="`${cardColor}--text`") {{ content.title }}
      v-card-text {{ content.text }}
</template>

<script>
export default {
  name: 'CardOnTimeline',
  props: {
    content: Object
  },
  data () {
    return {
      genreColor: {
        main: 'green',
        it: 'blue',
        arch: 'red',
        hobby: 'black'
      }
    }
  },
  computed: {
    cardColor: function() {
      return this.genreColor[this.content.genre]
    }
  }
};
</script>

<style scoped>

</style>
