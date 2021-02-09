import * as actionTypes from './constants';
import { fromJS } from 'immutable'
import axios from 'axios';

const changeList = (tags) => ({
  type: actionTypes.CHANGE_LIST,
  tags: fromJS(tags),
  totalPage: Math.ceil(tags.length / 8)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      // 修改store的数据
      dispatch(changeList(data.tags))
    }).catch(() => {
      console.log('error');
    })
  }
}

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})