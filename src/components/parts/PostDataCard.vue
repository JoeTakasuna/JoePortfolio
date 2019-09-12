<template lang="pug">
  v-card
    .logo
      v-img(src="@/assets/github.png")
    v-divider
    v-container(style="max-height: 356px; background-color: white;" class="overflow-y-auto")
      v-list-item(v-for="(data, index) in githubData" :key="index")
        v-list-item-content
          a(:href="data.svn_url" target="_blank")
            v-list-item-title {{ data.name }}
          v-list-item-subtitle.text {{ data.description }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostDataCard',
  data () {
    return {
      githubData: null
    }
  },
  created: function() {
    axios.get('https://api.github.com/users/JoeTakasuna/repos?sort=updated')
      .then(response => {
        this.githubData = response.data
      })
  }
}
</script>

<style scoped>
.logo {
  padding: 12px;
  max-width: 120px;
}
.text {
  font-size: x-small;
}
</style>
