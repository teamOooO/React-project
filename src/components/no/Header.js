import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (<header>

      <div className="am-fl tpl-header-logo">

        <a href="javascript:;"><img src="../../libs/img/logo.png" alt=""/></a>
      </div>

      <div className="tpl-header-fluid">

        <div className="am-fl tpl-header-switch-button am-icon-list">
          <span></span>
        </div>

        <div className="am-fl tpl-header-search">
          <form className="tpl-header-search-form">
            <button className="tpl-header-search-btn am-icon-search"></button>
            <input className="tpl-header-search-box" type="text" placeholder="搜索内容..."/>
          </form>
        </div>

        <div className="am-fr tpl-header-navbar" id="user-view">

        </div>
      </div>

    </header>)
  }
}
export default Header;
