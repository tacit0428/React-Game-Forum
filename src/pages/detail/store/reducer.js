import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  title: '',
  content: '',
  writer: '匿名',
  time: '2021-01-01 12:00:00',
  read: '0',
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content,
        writer: action.writer,
        time: action.time,
        read: action.read
      })
    case constants.TOGGLE_SCROLL_UP:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}