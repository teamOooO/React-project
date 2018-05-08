import React, {Component} from 'react'
import { Table, Button } from 'antd'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    storeHose: state.listreducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      fetch('/api/storehouse/getList')
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        dispatch({
          type: 'LOAD_STOREHOUSE',
          list: result.data.map(({_id,count,goodName,goodImg}) => (
            {
              key: _id,
              _id,
              count,
              goodName,
              goodImg
            }
          ))
        })
      })
    },
    listDelte:(key) =>{
      fetch(`/api/storehouse/delete/${key}`)
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: 'DELETE_ITEM',
          payload: key
        })
      })
    },
    edit:(key) => {
      dispatch({
        type: 'HIDDLE_ADD',
        visible: true
      })
      fetch(`/api/storehouse/edit/${key}`)
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: 'EDIT_ADD',
          payload: result.data
        })
      })
    }
  }
}

class StoreHouse extends Component {
  constructor(props,context) {
    super(props)
    this.columns = [{
      title: '商品图片',
      dataIndex: 'goodImg',
      width: 200,
      key: 'img',
      render: (img) => (
        <img src={"http://localhost:4000/uploads/"+ img} width='40' alt=""/>
      )
    },{
      title: '商品编码',
      dataIndex: '_id',
      width: 300,
      key: 'num',
    }, {
      title: '商品名称',
      dataIndex: 'goodName',
      width: 200,
      key: 'name',
    }, {
      title: '库存',
      dataIndex: 'count',
      width: 150,
      key: 'count',
    }, {
      title: '操作',
      key: 'option',
      render: (text,record) => (
      <span>
          <Button type="primary" onClick={() => this.props.edit(text.key)}>编辑</Button>&nbsp;
          <Button type="danger" onClick={() => this.props.listDelte(text.key)} >删除</Button>
      </span>
      ),
  }];
}

    render() {
        return (<Table
        columns={this.columns} 
        dataSource={this.props.storeHose} 
        pagination={{ pageSize: 5 }} 
        
        />)
    }

    componentDidMount() {
      this.props.getData()
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(StoreHouse)