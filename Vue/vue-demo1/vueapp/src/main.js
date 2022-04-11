// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import Test from './components/Test'
 
 
Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(VueRouter)
 
const routes = [
  {path:'/', component: Users},
  {path: '/test', component: Test}
]
 
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes //注意：routes的拼写，不要错写成routers
});
 
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // components: { App },
  // template: '<App/>'
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `,
}).$mount('#app')