import React, {Component} from 'react';
import {Menu, Breadcrumb, Icon} from 'antd';

class ProductListRoute extends Component{
  render() {
    return(
      <Menu.Item key="setting">
        <Icon type="setting"/>
        <span className="nav-text">商品列表</span>
      </Menu.Item>
    )
  }
}
export default ProductListRoute;
