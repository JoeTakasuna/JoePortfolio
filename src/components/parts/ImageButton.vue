<template lang="pug">
  v-btn.btn(@click="filtering" x-small depressed width="48px" height="48")
    v-img(:src="image" max-width="48px")
</template>

<script>
export default {
  name: 'ImageButton',
  props: {
    id: String,
    image: String
  },
  methods: {
    filtering: function() {
      this.$emit('filtering', this.id)
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 6px;
}
</style>
