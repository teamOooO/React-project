import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

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

=======
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import onsaleReducer from './reducers/onsaleReducer'

import 'antd/dist/antd.css';
import './styles/hoo.css';
import App from './components/App';
import {HashRouter as Router} from 'react-router-dom';
const store = createStore(onsaleReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));
>>>>>>> zby
