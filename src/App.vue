<template>
  <v-app id="app">
    <v-content>
      <HeaderMenu />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HeaderMenu from './components/parts/HeaderMenu.vue'

export default {
  name: 'App',
  components: {
    HeaderMenu
  }
  // data () {
  //   return {
  //     xxx: データの置き場所
  //   }
  // },
  // props: {
  //   xxx: データの受け取り
  // },
  // computed: {
  //   xxx: function() {
  //     return データの自動算出
  //   }
  // },
  // watch: {
  //   xxx: function() {
  //     データ変更時にメソッドを実行
  //   }
  // },
  // methods: {
  //   xxx: function() {
  //     メソッドの組み込み
  //   }
  // },
  // created: function() {
  //   インスタンスが作成された後に同期的に呼ばれるフック
  // },
  // mounted: function() {
  //   インスタンスがマウントされたちょうど後に呼ばれるフック
  // }
};
</script>

<style>
:root {
  --main: #86B81B;
  --dark: #2E3819;
  --light: #A1C358;
  --accent: #8F1CB8;
  --text: #000A02;
  --back: #FCFAF2;
}
#app {
  color: var(--text);
  background-color: var(--back);
  padding: 0 10vw;
}
</style>
