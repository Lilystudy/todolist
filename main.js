// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

import Todo from './todolist'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#todolist',
  template: '<todo/>',
  components: {Todo}
})
