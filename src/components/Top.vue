<template lang="pug">
  v-container.container
    v-layout(wrap)
      v-flex(xs12 sm6 md6)
        SearchByKeyword
      v-flex(xs12 sm6 md6)
        SearchByKeyword
</template>

<script>
import SearchByKeyword from './parts/SearchByKeyword.vue'

export default {
  name: 'Top',
  components: {
    SearchByKeyword
  }
};
</script>

<style scoped>
.container {
}
</style>
