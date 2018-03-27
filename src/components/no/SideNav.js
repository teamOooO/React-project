import React, {Component} from 'react';
class SideNav extends Component {
  render() {
    return(
      <div className="left-sidebar">

        <div className="tpl-sidebar-user-panel">
          <div className="tpl-user-panel-slide-toggleable">
            <div className="tpl-user-panel-profile-picture">
              <img src="libs/img/user04.png" alt=""/>
            </div>
            <span className="user-panel-logged-in-text">
                <i className="am-icon-circle-o am-text-success tpl-user-panel-status-icon"></i>
                禁言小张
            </span>
            <a href="javascript:;" className="tpl-user-panel-action-link"> <span className="am-icon-pencil"></span> 账号设置</a>
          </div>
        </div>


        <ul className="sidebar-nav" id="data-ul-table">

          <li className="sidebar-nav-link">
            <a href="#/">
              <i className="am-icon-home sidebar-nav-link-logo"></i> 首页
            </a>
          </li>

          <li className="sidebar-nav-heading">Page<span className="sidebar-nav-heading-info"> 常用页面</span></li>
          <li className="sidebar-nav-link">
            <a href="javascript:;" className="sidebar-nav-sub-title">
              <i className="am-icon-table sidebar-nav-link-logo"></i> 数据列表
              <span className="am-icon-chevron-down am-fr am-margin-right-sm sidebar-nav-sub-ico"></span>
            </a>
            <ul className="sidebar-nav sidebar-nav-sub" id="ul-table">
              <li className="sidebar-nav-link">
                <a href="#/product">
                  <span className="am-icon-angle-right sidebar-nav-link-logo"></span> 图文列表
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-nav-link">
            <a href="#/userSignup">
              <i className="am-icon-clone sidebar-nav-link-logo"></i> 注册
            </a>
          </li>
          <li className="sidebar-nav-link">
            <a href="#/userSignin">
              <i className="am-icon-key sidebar-nav-link-logo"></i> 登录
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default SideNav;
