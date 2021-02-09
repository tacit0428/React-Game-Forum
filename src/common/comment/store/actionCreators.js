import * as constants from './constants';
import moment from 'moment';
import { fromJS } from 'immutable'
import axios from 'axios';

export const changeValue = (value) => ({
  type: constants.CHANGE_VALUE,
  value
})

export const changeSubmitting = () => ({
  type: constants.CHANGE_SUBMITTING,
  submitting: true,
})

export const submitAll = (newComments) => ({
  type: constants.SUBMIT,
  submitting: false,
  value: '',
  comments: newComments
})

export const submit = (props) => {
  return (dispatch) => {
    dispatch(changeSubmitting())

    setTimeout(() => {
      const { value, comments, userName, userAvatar } = props
      const newComments = [
        ...comments,
        {
          author: userName,
          avatar: userAvatar,
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]
      dispatch(submitAll(newComments))

      // this.setState({
      //   submitting: false,
      //   value: '',
      //   comments: [
      //     ...this.state.comments,
      //     {
      //       author: this.props.userName,
      //       avatar: this.props.userAvatar,
      //       content: <p>{this.state.value}</p>,
      //       datetime: moment().fromNow(),
      //     },
      //   ],
      // });
    }, 1000);
  }
}