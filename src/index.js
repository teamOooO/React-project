import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { HashRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './styles/index.css';
import 'antd/dist/antd.css'

import App from './components/App';
import reducer from './store/reducers'
const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
=======
=======
>>>>>>> 46815b5e4cd1578bd23474243dab3443d3cfac7b
=======
>>>>>>> zjm

import App from './components/App';

import './styles/hoo.css';
import 'antd/dist/antd.css';
import {HashRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import slideshowReducer from './store/slideshowReducer'

<<<<<<< HEAD
const store = createStore(slideshowReducer, applyMiddleware(thunk))
=======
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
>>>>>>> zjm


<<<<<<< HEAD
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

<<<<<<< HEAD
ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
>>>>>>> efe702358794437abe40a3b895ba345d25128dbd
=======
ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));
>>>>>>> zby
>>>>>>> 46815b5e4cd1578bd23474243dab3443d3cfac7b
=======
import {HashRouter as Router} from 'react-router-dom';
import reducer from './store/reducer'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render( <Provider store={store} ><Router><App/></Router></Provider> , document.getElementById('root'));
>>>>>>> zjm
