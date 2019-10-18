import Vue from 'vue'
import Vuex from 'vuex'


import app from './modules/app'
import user from './modules/user'
import getters from './getters'

// 路有权限管理
import permission from './modules/permission'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    permission,
    user
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})