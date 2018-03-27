import React, {Component} from 'react';
import {Menu, Breadcrumb, Icon} from 'antd';

class HomeRoute extends Component{
  render() {
    return(
      <Menu.Item type="home">
        <Icon type="home"/>
        <span className="nav-text">首页</span>
      </Menu.Item>
    )
  }
}
export default HomeRoute;
