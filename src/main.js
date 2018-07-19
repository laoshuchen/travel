// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'stylus/reset.css'
import 'stylus/border.css'
import 'stylus/iconfont.css'
import 'swiper/dist/css/swiper.css'
// require styles

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/*
  入口文件
*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
