import React, { Component } from 'react';

import 'antd/dist/antd.css'

import { Table, Icon, Button } from 'antd';

import { connect } from 'react-redux'

// const columns = [{
//   title: '图片',
//   dataIndex: 'pictureUrl',
//   key: 'pictureUrl',
// }, {
//   title: '名称',
//   dataIndex: 'adName',
//   key: 'adName',
// }, {
//   title: '操作',
//   key: 'action',
//   render: (text, record, props, store) => {
//     console.log(this)
//     return (
//       <span>
//         <Button onClick={() => onClickButton(text,record)} type="primary">编辑</Button>
//         <Button type="danger">删除</Button>
//       </span>
//     )
//   },
// }];

const onClickButton = (text,record) => {
  console.dir(this)
  console.log(record)
  console.log(mapStateToProps(123).storeList)
  console.log(new App())
}

const mapStateToProps = (state) => {
  return {
    storeList: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findList:() => {
      dispatch(() => {
        fetch('/api/commodity/find')
          .then(response => response.json())
          .then((result) => {
            dispatch({
              type:'find',
              findList:result.data.result.map(({adName,pictureUrl,id}) => ({
                key:id + new Date().getTime(),
                pictureUrl: <img src={pictureUrl} width="200" alt=""/>,
                adName
              }))
            })
          })
      })
    },
    removeList:() => {
      console.log(1)
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      columns:[{
        title: '图片',
        dataIndex: 'pictureUrl',
        key: 'pictureUrl',
      }, {
        title: '名称',
        dataIndex: 'adName',
        key: 'adName',
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => {
          return (
            <span>
              <Button onClick={() => onClickButton(text,record)} type="primary">编辑</Button>
              <Button type="danger">删除</Button>
            </span>
          )
        },
      }]
    }
  }

  componentDidMount(){
    this.props.findList()
  }

  onClickButton(text,record){
    console.log(this,text,record)
  }

  render() {
    return (
      <Table columns={this.state.columns} dataSource={this.props.storeList} pagination={false} />
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
