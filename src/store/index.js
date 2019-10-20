import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'


import app from './modules/app'
import user from './modules/user'
import getters from './getters'

// 路有权限管理
import permission from './modules/permission'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app,
    permission,
    user
  },
  state: {},
  mutations: {},
  actions: {},
  getters,
  // strict: debug,
  plugins: debug ? [createLogger()] : []
})