<template>
  <v-app id="app">
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
  // data () {
  //   return {
  //     データの置き場所
  //   }
  // },
  // props: {
  //   データの受け取り
  // },
  // computed: {
  //   データの算出
  // },
  // methods: {
  //   メソッドの組み込み
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
}
</style>
