import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  login: false,
  avatar: "",
  account: "召唤师",
})


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.merge({
        'login': action.value,
        'avatar': action.avatar,
        'account': action.account
      })
    case constants.LOGOUT:
      return state.set('login', action.value)
    default:
      return state
  }
}