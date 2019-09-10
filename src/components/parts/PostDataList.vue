<template lang="pug">
  v-card
    v-container
      v-layout(wrap)
        v-flex(xs12 sm6 md3)
          v-card.card
            ul
              li(v-for="data in githubData") {{ data.name }}
        v-flex(xs12 sm6 md3)
          v-card.card
            a(class="qiita" href="https://qiita.com/jonpili" data-qiita-widget data-username="jonpili" data-hide-footer) Qiita投稿
        v-flex(xs12 sm6 md3)
          v-card.card
            a(class="twitter-timeline" data-height="400" href="https://twitter.com/jonpili?ref_src=twsrc%5Etfw") Tweets by jonpili
        v-flex(xs12 sm6 md3)
          v-card.card
            a(class="twitter-timeline" data-height="400" href="https://twitter.com/RealTweet_Joe?ref_src=twsrc%5Etfw") Tweets by RealTweet_Joe
        v-flex(xs12 sm12 md12)
          v-card.card
            a.frame(href="https://github.com/JoeTakasuna" target="_blank")
              img.img(src="https://grass-graph.moshimo.works/images/JoeTakasuna.png")
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostDataList',
  data () {
    return {
      items: null,
      message: '',
      githubData: null
    }
  },
  created: function() {
    axios.get('https://api.github.com/users/JoeTakasuna/repos')
      .then(response => {
        this.githubData = response.data
      })
      .catch(error => {
        this.message = 'Error!' + error
      })
      .finally(() => { // これ可能？
        this.message = ''
      })
  },
  mounted: function() {
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
}
</script>

<style scoped>
.card {
  margin: 6px;
}
.frame {
  display: flex;
  justify-content: center;
}
.img {
  margin: 6px;
  max-width: 100%;
}
</style>
