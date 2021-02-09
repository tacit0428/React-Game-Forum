import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DetailWrapper, Title, Content, Infos, Up } from './style'
import { actionCreators } from './store'
import { BackTop } from 'antd'
import UserComment from '../../common/comment'

class Detail extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const { title, content, writer, time, read } = this.props
    return (
      <DetailWrapper>
        <Title>{title}</Title>
        <Infos>
          <span className='writer'>{writer}</span>
          <span className='time'>{time}</span>
          <span className='read'>阅读数: {read}</span>
        </Infos>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
        {this.props.showScroll ?
          <BackTop onClick={this.handleScrollTop}>
            <Up><i className='iconfont'>&#xe608;</i></Up>
          </BackTop>
          : null}
        <UserComment></UserComment>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.location.state.id)
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
  writer: state.getIn(['detail', 'writer']),
  time: state.getIn(['detail', 'time']),
  read: state.getIn(['detail', 'read']),
  showScroll: state.getIn(['detail', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))