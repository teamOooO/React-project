import React, {Component} from 'react';
import {Menu, Breadcrumb, Icon} from 'antd';
// import BrowserDemo from 'site/theme/template/BrowserDemo';
// import img1 from './libs/img/logo.png';
// const SubMenu = Menu.SubMenu;

class AsideCollapse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: true
    }
    this.onCollapseChange = this.onCollapseChange.bind(this)
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse
    })
  }
  render() {
    const collapse = this.state.collapse;
    return (<div className={collapse
        ? "ant-layout-aside ant-layout-aside-collapse"
        : "ant-layout-aside"}>
      {/* 侧边栏 */}
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo"><img src="/libs/img/logo.png" width="100%" height="100%" alt=""/></div>
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
          <Menu.Item type="home">
            <Icon type="home"/>
            <span className="nav-text">首页</span>
          </Menu.Item>
          <Menu.Item key="setting">
            <Icon type="setting"/>
            <span className="nav-text">商品列表</span>
          </Menu.Item>
          <Menu.Item key="laptop">
            <Icon type="laptop"/>
            <span className="nav-text">促销活动</span>
          </Menu.Item>
          <Menu.Item key="notification">
            <Icon type="notification"/>
            <span className="nav-text">轮播管理</span>
          </Menu.Item>
          <Menu.Item key="folder">
            <Icon type="folder"/>
            <span className="nav-text">库存管理</span>
          </Menu.Item>

        </Menu>
        <div className="ant-aside-action" onClick={this.onCollapseChange}>
          {
            collapse
              ? <Icon type="right"/>
              : <Icon type="left"/>
          }
        </div>
      </aside>
      {/* 右侧 */}
      <div className="ant-layout-main">
        {/* 头部 */}
        <div className="ant-layout-header">hello~ 请登录</div>
        {/* 内容区 */}
        <div className="ant-layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            <Breadcrumb.Item>某应用</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ant-layout-container">
          <div className="ant-layout-content">
            <div style={{
                height: 400
              }}>
              内容区域
            </div>
          </div>
        </div>
        <div className="ant-layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
        </div>
      </div>
    </div>);
  }
};

export default AsideCollapse;
