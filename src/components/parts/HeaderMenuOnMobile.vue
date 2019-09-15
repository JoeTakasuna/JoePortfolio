<template lang="pug">
  .header-menu
    v-navigation-drawer(v-model="drawer" app right)
      v-list
        v-list-item
          v-list-item-content
            router-link.link(to="/") home
        v-list-item
          v-list-item-content
            router-link.link(to="/history") history
      router-link.link(to="/works")
        v-btn.btn(small outlined) works
      router-link.link(to="/analytics")
        v-btn.btn(small outlined) analytics
      router-link.link(to="/future")
        v-btn.btn(small outlined) future
    v-app-bar.app-bar(app color="light-green")
      div(class="flex-grow-1")
      v-app-bar-nav-icon(@click.stop="drawer = !drawer")
</template>

<script>
export default {
  name: 'HeaderMenuOnMobile',
  data: () => ({
      drawer: null,
  })
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
/* .app-bar {
  color: var(--light);
} */
</style>
