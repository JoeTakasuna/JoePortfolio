<template lang="pug">
  v-btn(@click="filtering"
        x-small
        color="grey lighten-3"
        :elevation="elevationHeight"
        :width="width"
        :height="height")
    v-img(:src="image" :width="width" :height="height")
</template>

<script>
export default {
  name: 'ImageButton',
  props: {
    id: String,
    image: String,
    width: String,
    height: String,
    selectedOnFilter: Boolean
  },
  computed: {
    elevationHeight () {
      if (this.selectedOnFilter) {
        return 10
      } else {
        return 0
      }
    }
  },
  methods: {
    filtering: function() {
        this.$emit('filtering', this.id)
    }
  }
};
</script>

<style scoped>

</style>
