import React, {Component} from 'react'
import { Table, Button } from 'antd';

const columns = [{
    title: '商品图片',
    dataIndex: 'img',
    width: 150,
    key: 'img',
  },{
    title: '商品编码',
    dataIndex: 'name',
    width: 150,
    key: 'num',
  }, {
    title: '商品名称',
    dataIndex: 'name',
    width: 150,
    key: 'name',
  }, {
    title: '仓库所在地',
    dataIndex: 'address',
    width: 150,
    key: 'address',
  }, {
    title: '操作',
    key: 'option',
    render: (text, record) => (
    <span>
        <Button type="primary">编辑</Button>
        <Button type="danger">删除</Button>
    </span>
    ),
}];
  
  const data = [];
  for (let i = 0; i < 30; i++) {
    data.push({
      key: i,
      img: 'pic',
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
      count: 10
    });
  }
  

class StoreHouse extends Component {
  constructor(props) {
    super(props)
  }

    render() {
        return (<Table
        columns={columns} 
        dataSource={data} 
        pagination={{ pageSize: 20 }} 
        scroll={{ y: 400 }}
        />)
    }

}



export default StoreHouse