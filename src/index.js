import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './styles/hoo.css';
import 'antd/dist/antd.css';
import {HashRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import slideshowReducer from './store/slideshowReducer'

const store = createStore(slideshowReducer, applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

