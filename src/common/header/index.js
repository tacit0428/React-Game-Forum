import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavHome,
  NavItem,
  Login,
  NavSearch,
  Addition,
  Button,
  UserAvatar,
  UserName,
  UserWrapper,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from './style.js'

class Header extends Component {
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = page * 8; i < (page + 1) * 8 && i < newList.length; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
           <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe606;</i>
              换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, list, login, logout, userName, userAvatar, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <Link style={NavHome} to='/'>首页</Link>
          <NavItem className='left' href='https://lol.qq.com/download.shtml?ADTAG=innercop.lol.web.top' target='__blank'>
            游戏下载
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur} />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          {
            login ?
              <NavItem style={Login} onClick={logout}>退出</NavItem> :
              <Link style={Login} to='/login'>登录</Link>
          }
          {
            login ?
              <UserWrapper>
                <UserName>{userName}</UserName>
                <Avatar style={UserAvatar} size={40} src={userAvatar} icon={<UserOutlined />} />
              </UserWrapper>
              : <Button className='reg'>注册</Button>
          }
          <Link to='/write'>
            <Button className='writing'>
              <i className="iconfont">&#xe667;</i>
              写文章
              </Button>
          </Link>

        </Addition>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login']),
    userAvatar: state.getIn(['login', 'avatar']),
    userName: state.getIn(['login', 'account'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle)
      } else {
        originAngle = 0
      }
      console.log(originAngle + 360)
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage - 1) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(0))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)