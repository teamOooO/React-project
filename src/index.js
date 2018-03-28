import React from 'react';
import ReactDOM from 'react-dom';
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


import 'antd/dist/antd.css';
// import './libs/css/amazeui.min.css';
// import './libs/css/amazeui.datatables.min.css';
// import './libs/css/app.css';
import './styles/hoo.css';


import App from './components/App';


import {HashRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
>>>>>>> efe702358794437abe40a3b895ba345d25128dbd
