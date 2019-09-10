<template lang="pug">
  .container
    v-btn(@click="shuffle") Shuffle
    transition-group(name="flip-list")
      v-card(
        v-for="item in items"
        :key="item"
        class="list-complete-item"
        ) {{ item }}
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Top',
  data () {
    return {
      items: [1,2,3,4,5,6,7,8,9]
    }
  },
  methods: {
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  }
};
</script>

<style scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>
