import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  comments: [],
  submitting: false,
  value: '',
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_VALUE:
      return state.set('value', action.value)
    case constants.CHANGE_SUBMITTING:
      return state.set('submitting', action.submitting)
    case constants.SUBMIT:
      console.log(action);
      return state.merge({
        submitting: action.submitting,
        value: action.value,
        comments: action.comments
      })
    default:
      return state
  }
}