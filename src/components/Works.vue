<template lang="pug">
  .container
    h1 技術と作品
    WorkCard(width="240px" height="240px")
</template>

<script>
import WorkCard from './parts/WorkCard.vue'

export default {
  name: 'Works',
  components: {
    WorkCard
  }
};
</script>

<style scoped>

</style>
