import axios from 'axios';
import * as constants from './constants'

const changeLogin = (avatar, account) => ({
  type: constants.CHANGE_LOGIN,
  value: true,
  avatar: avatar,
  account: account
})


export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json', { params: { user: account, pwd: password } }).then((res) => {
      const result = res.data.data;
      const { login, avatar } = result
      if (login) {
        dispatch(changeLogin(avatar, account))
      } else {
        alert('登录失败')
      }
    })
  }
}

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})