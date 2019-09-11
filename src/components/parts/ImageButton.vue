<template lang="pug">
  v-btn.btn(@click="filtering" x-small :depressed="!filtered" width="48px" height="48")
    v-img(:src="image" max-width="48px")
</template>

<script>
export default {
  name: 'ImageButton',
  props: {
    id: String,
    image: String
  },
  data () {
    return {
      filtered: false
    }
  },
  methods: {
    filtering: function() {
      if (this.filtered) {
        this.$emit('filtering', '')
        this.filtered = false
      } else {
        this.$emit('filtering', this.id)
        this.filtered = true
      }
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 6px;
}
</style>
