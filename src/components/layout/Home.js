import React, {Component} from 'react';
import {Menu, Breadcrumb, Icon} from 'antd';
import Welcome from './Welcome';
import OnSale from './OnSale';
import StoreHouse from './StoreHouse';
<<<<<<< HEAD
import zApp from '../zComponents/zApp'
import zList from '../zComponents/list'
=======
import AddItem from '../onsale/AddItem';
>>>>>>> zby
import {
  Route,
  Link
} from 'react-router-dom'


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
            <Link className="nav-text" to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="setting">
            <Icon type="setting"/>
            <Link className="nav-text" to='/list'>商品列表</Link>
          </Menu.Item>
          <Menu.Item key="laptop">
            <Icon type="laptop"/>
            <Link className="nav-text" to="/onsale">促销活动</Link>
          </Menu.Item>
          <Menu.Item key="notification">
            <Icon type="notification"/>
            <Link className="nav-text" to="/banner">轮播管理</Link>
          </Menu.Item>
          <Menu.Item key="folder">
            <Icon type="folder"/>
            <Link className="nav-text" to="/storehouse">库存管理</Link>
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
            <Breadcrumb.Item>某应用</Breadcrumb.Item >
          </Breadcrumb>
        </div>
        <div className="ant-layout-container">
          <div className="ant-layout-content">    
<<<<<<< HEAD
<<<<<<< HEAD
            <div style={{minHeight:400}}>     
              <Route path='/' exact component={Welcome}/>
              <Route path='/onsale' component={OnSale}/>
              <Route path='/storehouse' component={StoreHouse}/>
              <Route path='/banner' component={zApp}></Route>
              <Route path='/list' component={zList}></Route>
              <Route path='/edit/:id' component={zList}></Route>
            </div> 
=======
          <div style={{minHeight:400}}>     
            <Route path='/' exact component={Welcome}/>
            <Route path='/onsale' component={OnSale}/>
            <Route path='/storehouse' component={StoreHouse}/>
            <Route path='/add' component={AddItem}/></div> 
>>>>>>> zby
=======
            <div style={{height:400}}>     
              <Route path='/' exact component={Welcome}/>
              <Route path='/onsale' component={OnSale}/>
              <Route path='/storehouse' component={StoreHouse}/>
            </div> 
>>>>>>> zjm
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
