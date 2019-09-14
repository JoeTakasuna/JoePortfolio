<template lang="pug">
  v-text-field(:loading="loading"
               label="キーワード検索"
               prepend-inner-icon="search"
               v-model="keyword"
               clearable)
</template>

<script>
import _ from 'lodash'

export default {
  name: 'SearchByKeyword',
  data () {
    return {
      keyword: null,
      loading: false
    }
  },
  methods: {
    filtering: function() {
      this.$emit('filtering', this.keyword)
      this.loading = false
    }
  },
  mounted: function() {
    this.debouncedFiltering = _.debounce(this.filtering, 1000)
  },
  watch: {
    keyword: function() {
      this.loading = true
      this.debouncedFiltering()
    }
  }
};
</script>

<style scoped>

</style>
