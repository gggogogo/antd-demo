const getters = {
  token: state => state.app.token,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
}
export default getters