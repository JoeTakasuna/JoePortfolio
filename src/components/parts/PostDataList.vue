<template lang="pug">
  v-card
    v-container.container
      v-layout(wrap)
        v-flex(xs12 sm6 md3)
          PostDataCard.card
        v-flex(xs12 sm6 md3)
          v-card.card
            a(class="qiita" href="https://qiita.com/jonpili" data-qiita-widget data-username="jonpili" data-hide-footer) Qiita投稿
        v-flex(xs12 sm6 md3)
          v-card.card
            a(class="twitter-timeline" data-height="400" href="https://twitter.com/jonpili?ref_src=twsrc%5Etfw") Tweets by jonpili
        v-flex(xs12 sm6 md3)
          v-card.card
            a(class="twitter-timeline" data-height="400" href="https://twitter.com/RealTweet_Joe?ref_src=twsrc%5Etfw") Tweets by RealTweet_Joe
</template>

<script>
import axios from 'axios'
import PostDataCard from './PostDataCard.vue'

export default {
  name: 'PostDataList',
  components: {
    PostDataCard
  },
  methods: {
    reflectScript: function() {
      if (!document.getElementById('qiita-wjs')) {
        (function(d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return
          js = d.createElement(s)
          js.id = id
          js.src = 'https://qiita-widget.suin.io/widget.js'
          fjs.parentNode.insertBefore(js, fjs)
        })(document, 'script', 'qiita-wjs')
      }
      if (!document.getElementById('twitter-wjs')) {
        (function(d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return
          js = d.createElement(s)
          js.id = id
          js.src = 'https://platform.twitter.com/widgets.js'
          fjs.parentNode.insertBefore(js, fjs)
        })(document, 'script', 'twitter-wjs')
      }
    }
  },
  created: function() {
    this.reflectScript()
  },
  destroyed () {
    document.getElementById('qiita-wjs').remove()
    document.getElementById('twitter-wjs').remove()
  }
}
</script>

<style scoped>
.container {
  background-color: var(--light);
}
.card {
  margin: 6px;
}
</style>
