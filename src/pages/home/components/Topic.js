import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'
import { toJS } from 'immutable'

class Topic extends PureComponent {
  componentDidMount() {
  }
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <a className="link" href={item.get("link")} target="_blank">
                  <img className="logo" src={item.get('logoUrl')} />
                  {item.get('title')}
                </a>
              </TopicItem>
            )
          })
        }
        <a className='more' href="https://lpl.qq.com/es/team.shtml" target='_blank'>更多战队...</a>
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('topicList'),
  ranklist: state.get('home').get('rankList')
})


export default connect(mapState, null)(Topic)