<template lang="pug">
  v-card
    v-container.container
      v-layout(wrap)
        v-flex(xs12 sm6 md3)
          v-card.card
            .logo
              v-img(src="@/assets/github.png")
            v-divider
            v-container(style="max-height: 356px; background-color: white;" class="overflow-y-auto")
              v-list-item(v-for="data in githubData")
                v-list-item-content
                  a(:href="data.svn_url" target="_blank")
                    v-list-item-title {{ data.name }}
                  v-list-item-subtitle.text {{ data.description }}
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

export default {
  name: 'PostDataList',
  data () {
    return {
      items: null,
      githubData: null
    }
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
    axios.get('https://api.github.com/users/JoeTakasuna/repos?sort=updated')
      .then(response => {
        this.githubData = response.data
      })
  },
  mounted: function() {
    this.reflectScript()
  },
  updated: function() {
    this.reflectScript()
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
.logo {
  padding: 12px;
  max-width: 120px;
}
.text {
  font-size: x-small;
}
</style>
