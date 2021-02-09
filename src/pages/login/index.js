import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Info, LoginButton, Title } from './style'
import { Input, Button } from 'antd'
import { UserOutlined, KeyOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { actionCreators } from './store'


class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Title>用户登录</Title>
            <Input style={Info} placeholder="账号"
              onChange={(event) => { this.account = event.target.value }}
              prefix={<UserOutlined />} />
            <Input.Password
              style={Info}
              placeholder="密码"
              onChange={(event) => { this.password = event.target.value }}
              prefix={<KeyOutlined />}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            <Button style={LoginButton} type="primary"
              onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login(account, password) {
    dispatch(actionCreators.login(account, password))
  }
})

export default connect(mapState, mapDispatch)(Login)