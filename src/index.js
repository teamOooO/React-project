import React from 'react';
import ReactDOM from 'react-dom';


import 'antd/dist/antd.css';
// import './libs/css/amazeui.min.css';
// import './libs/css/amazeui.datatables.min.css';
// import './libs/css/app.css';
import './styles/hoo.css';


import App from './components/App';


import {HashRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
