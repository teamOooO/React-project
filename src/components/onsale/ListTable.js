import {Table, Button} from 'antd';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
  })
};

const mapStateToProps = (state) => {
  return {list: state.list, curitem: state.curItem}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClickDeleteButton: (id) => {
      fetch('/api/onsale/delete', {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
          body: "id=" + id
        })
        .then(response => response.json())
        .then(result => {
          if (result.ret) 
            dispatch({type: 'DELETE', payload: id})
        })
    },
    onClickUpdateButton(id) {
      fetch('/api/onsale/curitem', {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
          body: "id=" + id
        })
        .then(response => response.json())
        .then(result => {
          if (result.ret)
            dispatch({type: 'GETCUR', payload: result.lst})
        })
    },
    updateItems:(res)=>{
      dispatch({type: 'UPDATE', payload: res})
    },
    addItems: (res) => {
      dispatch({type: 'ADD', payload: res})
    },
    LoadItems: (res) => {
      dispatch({type: 'LOAD', payload: res})
    }
  }
}
let _this = null;
const columns = [
  {
    title: '促销名称',
    dataIndex: 'name'
  }, {
    title: '促销类型',
    dataIndex: 'type'
  }, {
    title: '促销时间',
    dataIndex: 'time'
  }, {
    title: '满减规则',
    dataIndex: 'status'
  }, {
    title: '操作',
    key: "action",
    render: (text, record) => (
      <span>
        <Button
          type="primary"
          style={{
          marginRight: '20px'
        }}
          onClick={() => _this.props.onClickUpdateButton(text._id)}><Link to="/add">修改</Link></Button>
        <Button type="danger" onClick={() => _this.props.onClickDeleteButton(text._id)}>删除</Button>
      </span>
    )
  }
];

class listTable extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    _this = this;
  }
  render() {
    return (
      <div>
        <Button type='primary'>
          <Link to="/add">新增</Link>
        </Button>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.props.list}
          rowKey={item => item._id}/></div>
    )
  }

  componentDidMount() {
    if (this.props.list.length == 0) {
      fetch('/api/onsale/list')
        .then(response => response.json())
        .then(result => {
          this
            .props
            .LoadItems(result.lst)
        })
    }
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(listTable);

export default List;