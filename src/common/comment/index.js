import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Title } from './style'
import { actionCreators } from './store'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} 个回复`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);


class UserComment extends PureComponent {

  render() {
    const { comments, submitting, value, userAvatar, handleChange, handleSubmit } = this.props;

    return (
      <>
        <Title>评论区</Title>
        <Comment
          avatar={
            <Avatar
              src={userAvatar}
              icon={<UserOutlined />}
            />
          }
          content={
            <>
              <Form.Item>
                <TextArea rows={4} onChange={(e) => handleChange(e)} value={value} placeholder='您可以畅所欲言' />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" loading={submitting} onClick={() => handleSubmit(this.props)} type="primary">
                  评论
            </Button>
              </Form.Item>
            </>
          }
        />
        {comments.length > 0 && <CommentList comments={comments} />}
      </>
    );
  }

}

const mapState = (state) => ({
  comments: state.getIn(['comment', 'comments']),
  submitting: state.getIn(['comment', 'submitting']),
  value: state.getIn(['comment', 'value']),
  userAvatar: state.getIn(['login', 'avatar']),
  userName: state.getIn(['login', 'account'])
})

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(obj) {
      if (!obj.value) {
        return;
      }
      dispatch(actionCreators.submit(obj))
    },
    handleChange(e) {
      dispatch(actionCreators.changeValue(e.target.value))
    }
  }
}

export default connect(mapState, mapDispatch)(UserComment)