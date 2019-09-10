<template lang="pug">
  .container
    h1
    PostDataList
</template>

<script>
import PostDataList from './parts/PostDataList.vue'

export default {
  name: 'Analytics',
  components: {
    PostDataList
  }
};
</script>

<style scoped>
.container {
}
</style>
