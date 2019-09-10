<template lang="pug">
  .container
    router-link.link(to="/")
      v-btn.btn(small outlined) home
    router-link.link(to="/history")
      v-btn(small outlined) history
    router-link.link(to="/works")
      v-btn(small outlined) works
    router-link.link(to="/analytics")
      v-btn(small outlined) analytics
    router-link.link(to="/future")
      v-btn(small outlined) future
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
.btn {
  background-color: var(--main);
}
.link {
  margin: 12px;
  text-decoration: none;
}
</style>
