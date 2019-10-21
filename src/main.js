import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Books from './components/Books'
import Movies from './components/Movies'
import TvSeries from './components/TvSeries'
import Anime from './components/Anime'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
  { path: '/books', component: Books },
  { path: '/movies', component: Movies },
  { path: '/tv', component: TvSeries },
  { path: '/anime', component: Anime },
  { path: '/' , component: HelloWorld},
  
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
