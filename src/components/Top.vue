<template lang="pug">
  .container
    v-btn(@click="shuffle") Shuffle
    transition-group.group(name="flip-list")
      v-card.card(
        v-for="item in items"
        :key="item"
        ) {{ item }}
</template>

<script>
import _ from 'lodash'
import WorkCard from './parts/WorkCard.vue'

export default {
  name: 'Top',
  components: {
    WorkCard
  },
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
.group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.flip-list-move {
  transition: transform 1s;
}
.card {
  min-width: 240px;
}
</style>
