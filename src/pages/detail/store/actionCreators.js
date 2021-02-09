import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title, content, writer, time, read) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content,
  writer,
  time,
  read
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data
      const { title, content, writer, time, read } = result
      dispatch(changeDetail(title, content, writer, time, read))
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_UP,
  show
})