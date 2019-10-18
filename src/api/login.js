import { axios } from './request'

export function login() {
  return new Promise(resolve => {
    resolve({
      'id': 'Mock.mock()',
      'name': "Mock.mock('@name')",
      'username': 'admin',
      'password': '',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
      'status': 1,
      'telephone': '',
      'lastLoginIp': '27.154.74.117',
      'lastLoginTime': 1534837621348,
      'creatorId': 'admin',
      'createTime': 1497160610259,
      'deleted': 0,
      'roleId': 'admin',
      'lang': 'zh-CN',
      'token': '4291d7da9005377ec9aec4a71ea837f'
    })
  })
}
export function getInfo() {
  return new Promise(resolve => {
    resolve('[测试接口] 注销成功')
  })
}

export function logout() {
  return axios({
    url: '/auth/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}