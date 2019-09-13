<template lang="pug">
  v-btn.btn(@click="filtering"
            x-small
            depressed
            :outlined="selectedOnFilter"
            width="48"
            height="48"
            )
    v-img(:src="image" max-width="48")
</template>

<script>
export default {
  name: 'ImageButton',
  props: {
    id: String,
    image: String,
    selectedOnFilter: Boolean
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
