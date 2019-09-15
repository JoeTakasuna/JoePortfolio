<template>
  <v-app id="app">
    <v-content>
      <HeaderMenuOnMobile v-if="isMobile" />
      <HeaderMenu v-else />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HeaderMenuOnMobile from './components/parts/HeaderMenuOnMobile.vue'
import HeaderMenu from './components/parts/HeaderMenu.vue'

export default {
  name: 'App',
  components: {
    HeaderMenuOnMobile,
    HeaderMenu
  },
  // data () => ({
  //   xxx: データの置き場所
  // }),
  // props: {
  //   xxx: データの受け取り
  // },
  // computed: {
  //   xxx: () {
  //     return データの自動算出
  //   }
  // },
  // watch: {
  //   xxx: () {
  //     データ変更時にメソッドを実行
  //   }
  // },
  // methods: {
  //   xxx: () {
  //     メソッドの組み込み
  //   }
  // },
  // created: () {
  //   インスタンスが作成された後に同期的に呼ばれるフック
  // },
  // mounted: () {
  //   インスタンスがマウントされたちょうど後に呼ばれるフック
  // },
  data: () => ({
    isMobile: false,
  }),
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    },
  }
};
</script>

<style>
:root {
  /* light-green */
  --main: #8BC34A;
  /* light-green darken-4 */
  --dark: #33691E;
  /* light-green lighten-4 */
  --light: #DCEDC8;
  /* deep-purple */
  --accent: #673AB7;
  /* grey darken-4 */
  --text: #000A02;
  /* grey lighten-4 */
  --back: #F5F5F5;
}
#app {
  color: var(--text);
  background-color: var(--back);
  padding: 0 5vw;
}
</style>
