import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Topic from './components/Topic'
import { actionCreators } from './store'
import { HomeWrapper, HomeLeft, HomeRight, Up } from './style'
import { BackTop, Carousel } from 'antd'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <Carousel autoplay>
            <img className="banner-img" src="//ossweb-img.qq.com/upload/adw/image/20210129/e440e62713f57cd970d93c4b9f86166b.jpeg" />
            <img className="banner-img" src="//ossweb-img.qq.com/upload/adw/image/20210205/bd3e7cc55b6cc4e80df713c7dddac6a8.jpeg" />
            <img className="banner-img" src="//ossweb-img.qq.com/upload/adw/image/20210205/485d8e5f4ee6a842898f967d35c1d497.jpeg" />
          </Carousel>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ?
          <BackTop onClick={this.handleScrollTop}>
            <Up><i className='iconfont'>&#xe608;</i></Up>
          </BackTop>
          : null}

      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action)
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)