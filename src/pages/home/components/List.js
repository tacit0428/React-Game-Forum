import React, { PureComponent } from 'react'
import { ListItem, ListInfo, ArticleInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={{ pathname: '/detail', state: { id: item.get('id') } }}>
                {/* <Link key={index} to={'/detail/' + item.get('id')}> */}
                <ListItem key={item.get("id")}>
                  <img className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='description'>{item.get('desc')}</p>
                    <ArticleInfo>
                      <div className='comment'>
                        <i className='iconfont'>&#xe60d;</i>
                        {item.get('comment')}
                      </div>
                      <div className='like'>
                        <i className='iconfont'>&#xe603;</i>
                        {item.get('like')}
                      </div>
                    </ArticleInfo>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapState, mapDispatch)(List)