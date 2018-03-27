import React, {Component} from 'react';
class StyleSwitch extends Component {
  render() {
    return (<div className="tpl-skiner">
      <div className="tpl-skiner-toggle am-icon-cog"></div>
      <div className="tpl-skiner-content">
        <div className="tpl-skiner-content-title">
          选择主题
        </div>
        <div className="tpl-skiner-content-bar">
          <span className="skiner-color skiner-white" data-color="theme-white"></span>
          <span className="skiner-color skiner-black" data-color="theme-black"></span>
        </div>
      </div>
    </div>)
  }
}

export default StyleSwitch;
