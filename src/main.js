import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SimplePlugin from './plugins/simplePlugin'
import marked from 'marked'

Vue.use(SimplePlugin)
Vue.filter('marked', marked)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   render: h => h(App),
//   el: "#app"
// });
