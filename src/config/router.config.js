import { UserLayout, BasicLayout, PageView } from '@/layouts'

export const constantRouterMap = [{
  path: '/user',
  component: UserLayout,
  redirect: '/user/login',
  hidden: true,
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/views/user/Login')
    }
  ]
}]

export const asyncRouterMap = [{
  path: '/',
  name: 'index',
  component: BasicLayout,
  meta: { title: '首页' },
  redirect: '/list/table-list',
  children: [
    {
      path: '/list',
      name: 'list',
      component: PageView,
      redirect: '/list/table-list',
      meta: { title: '列表页', icon: 'table', permission: ['table'] },
      children: [
        {
          path: '/list/table-list',
          name: 'TableListWrapper',
          hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
          component: () => import('@/views/list/TableList'),
          meta: { title: '查询表格', keepAlive: true, permission: ['table'] }
        }
      ]
    }
  ]
}]