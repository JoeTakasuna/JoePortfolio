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
      v-toolbar-title(class="white--text") Joe's Portfolio
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
          name: 'ホーム',
          icon: 'home'
        },
        {
          path: '/history',
          name: '経歴',
          icon: 'history'
        },
        {
          path: '/works',
          name: '技術・作品',
          icon: 'work'
        },
        {
          path: '/analytics',
          name: '分析',
          icon: 'search'
        },
        {
          path: '/future',
          name: '今後の展望',
          icon: 'call_split'
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
