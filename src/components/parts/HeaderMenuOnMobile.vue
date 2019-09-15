<template lang="pug">
  .header-menu
    v-navigation-drawer(v-model="drawer" app right)
      v-list
        v-list-item(v-for="linkItem in linkItems"
                    :key="linkItem.name"
                    @click="toLink(linkItem.path)")
          v-list-item-action
            v-icon {{ linkItem.icon }}
          v-list-item-content
            v-list-item-title {{ linkItem.name }}
    v-app-bar.app-bar(app color="light-green")
      div(class="flex-grow-1")
      v-app-bar-nav-icon(@click.stop="drawer=!drawer")
</template>

<script>
export default {
  name: 'HeaderMenuOnMobile',
  data: () => ({
      drawer: false,
      linkItems: [
        {
          path: '/',
          name: 'home',
          icon: 'home'
        },
        {
          path: '/history',
          name: 'history',
          icon: 'home'
        },
        {
          path: '/works',
          name: 'works',
          icon: 'home'
        },
        {
          path: '/analytics',
          name: 'analytics',
          icon: 'home'
        },
        {
          path: '/future',
          name: 'future',
          icon: 'home'
        }
      ]
  }),
  methods: {
    toLink (link) {
      this.$router.push(link)
    }
  }
};
</script>

<style scoped>

</style>
