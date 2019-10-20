import Vue from 'vue'
import router from './router'
import store from './store'

// import NProgress from ' NProgress'
import notification from 'ant-design-vue/es/notification'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { setDocumentTitle } from '@/utils/domUtil'

const whiteList = ['login', 'register', 'registerResult']
const DEFAULT_ROUTER_PATH = '/list/table-list'

router.beforeEach((to, from, next) => {
  // NProgress.start()
  // debugger
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(to.meta.title))
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (to.path === '/user/login') {
      next(DEFAULT_ROUTER_PATH)   //跳转到默认页面
      // NProgress.done()
    } else {
      // 没有权限时获取权限
      if (store.getters.roles.length === 0) {
        store
          .dispatch('GetInfo')
          .then(
            res => {
              const roles = res.result && res.result.role
              // 获取权限后生成动态路由表
              store.dispatch('GenerateRoutes', { roles }).then(() => {
                router.addRoutes(store.getters.addRouters)
                const redirect = decodeURIComponent(from.query.redirect || to.path)
                if (to.path === redirect) {
                  // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                  // 暂时不太理解
                  next({ ...to, replace: true })
                } else {
                  next({ path: redirect })
                }
              })
            })
          .catch(() => {
            notification.error({
              message: '错误',
              description: '请求用户信息失败，请重试'
            })
            store.dispatch('Logout').then(() => {
              next({ path: 'user/login', query: { redirect: to.fullPath } })
            })
          })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 免登录白名单，直接登陆
      next()
    } else {
      next({ path: 'user/login', query: { redirect: to.fullPath } })
      // NProgress.done()
    }
  }
})

router.afterEach(() => {
  // NProgress.done() // finish progress bar
})