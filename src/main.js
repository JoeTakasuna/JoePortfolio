import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// 0. モジュールシステムを使っている場合 (例: vue-cli 経由で)、Vue と VueRouter をインポートし、`Vue.use(VueRouter)` を呼び出します。
Vue.use(VueRouter)

// 1. ルートコンポーネントを定義します
// 他のファイルからインポートすることもできます
import Welcome from './components/Welcome.vue'
import Top from './components/Top.vue'
import History from './components/History.vue'
import Works from './components/Works.vue'
import Analytics from './components/Analytics.vue'
import Future from './components/Future.vue'

// 2. ルートをいくつか定義します
// 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
// このコンポーネントは実際の `Vue.extend()`、
// またはコンポーネントオプションのオブジェクトでも構いません。
// ネストされたルートに関しては後で説明します
const routes = [
  { path: '/', component: Welcome },
  { path: '/top', component: Top },
  { path: '/history', component: History },
  { path: '/works', component: Works },
  { path: '/analytics', component: Analytics },
  { path: '/future', component: Future }
]

// 3. ルーターインスタンスを作成して、ルートオプションを渡します
// 追加のオプションをここで指定できますが、
// この例ではシンプルにしましょう
const router = new VueRouter({
  mode: 'history',
  routes // `routes: routes` の短縮表記
})

// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
