<template lang="pug">
  .container
    router-link.link(v-for="linkItem in linkItems"
                     :key="linkItem.name"
                     :to="linkItem.path")
      v-btn.btn(small outlined) {{ linkItem.name }}
</template>

<script>
export default {
  name: 'HeaderMenu',
  data: () => ({
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
};
</script>

<style scoped>
.container {
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
