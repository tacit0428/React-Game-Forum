import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd';
import { WriterWrapper, ListTitle } from '../style'

const columns = [
  {
    title: '排名',
    dataIndex: 'rank',
    width: 80
  },
  {
    title: '俱乐部',
    dataIndex: 'team',
    width: 120
  },
  {
    title: '胜负',
    dataIndex: 'win',
  }
];

class Writter extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <h1 style={ListTitle}>积分榜</h1>
        <Table
          columns={columns}
          dataSource={this.props.ranklist.toJS()}
          scroll={{ y: 280 }}
          pagination={false}
        />
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  ranklist: state.get('home').get('rankList')
})

export default connect(mapState, null)(Writter)