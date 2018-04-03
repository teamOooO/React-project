import React from 'react';
import ReactDOM from 'react-dom';


import 'antd/dist/antd.css';
// import './libs/css/amazeui.min.css';
// import './libs/css/amazeui.datatables.min.css';
// import './libs/css/app.css';
import './styles/hoo.css';

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App';

import {HashRouter as Router} from 'react-router-dom';
import reducer from './store/reducer'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render( <Provider store={store} ><Router><App/></Router></Provider> , document.getElementById('root'));
