<template lang="pug">
  v-card
    .logo
      v-img(src="@/assets/github.png")
    v-divider
    .container
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
  mounted: function() {
    axios.get('https://api.github.com/users/jonpili/repos?sort=updated')
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
.container {
  max-height: 356px;
  background-color: white;
  overflow-y: scroll;
}
.text {
  font-size: x-small;
}
</style>
