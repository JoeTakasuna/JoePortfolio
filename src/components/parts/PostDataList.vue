<template lang="pug">
  v-card
    v-container
      v-layout(wrap)
        v-flex(xs12 sm6 md3)
          v-card github
        v-flex(xs12 sm6 md3)
          v-card {{ message }} {{ items }}
        v-flex(xs12 sm6 md3)
          v-card twitter
        v-flex(xs12 sm6 md3)
          v-card real twitter
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostDataList',
  data () {
    return {
      items: null,
      message: ''
    }
  },
  created: function() {
    this.message = 'Loading...'
    var vm = this
    var params = { page: 1, per_page: 20, query: 'Vue.js' }
    axios.get('https://qiita.com/api/v2/items', { params })
      .then(response => {
        console.log(response.data)
        vm.items = response.data
      })
      .catch(error => {
        vm.message = 'Error!' + error
      })
      .finally(() => { // これ可能？
        vm.message = ''
      })
  }
};
</script>

<style scoped>
.container {
}
</style>
