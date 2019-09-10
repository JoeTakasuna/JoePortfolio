<template lang="pug">
  .container
    router-link.link(to="/")
      v-btn(small) home
    router-link.link(to="/history")
      v-btn(small) history
    router-link.link(to="/works")
      v-btn(small) works
    router-link.link(to="/analytics")
      v-btn(small) analytics
    router-link.link(to="/future")
      v-btn(small) future
</template>

<script>
export default {
  name: 'HeaderMenu'
};
</script>

<style scoped>
.container {
  display: inline-block;
  text-align: center;
}
.link {
  margin: 12px;
  text-decoration: none;
}
</style>
