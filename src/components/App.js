<<<<<<< HEAD
import React, { Component } from 'react';
<<<<<<< HEAD
import { Route } from 'react-router-dom'
import '../styles/index.css';

import StoreHouse from './StoreHouse'

class App extends Component {
  render() {
    return( 
    
      <Route path='/storehouse' component={StoreHouse}/>
   
      )
=======
=======
<<<<<<< HEAD
import React, { Component } from 'react'

>>>>>>> 46815b5e4cd1578bd23474243dab3443d3cfac7b
import {Switch, Route, Link} from 'react-router-dom';
=======
import React, { Component } from 'react';
>>>>>>> zby

import Home from './layout/Home';

class Layout extends Component{
  render(){
    return (
        <Home></Home>
    )
  }
}


class App extends Component { 
  render() {
    return (
      <Layout></Layout>
    );
>>>>>>> efe702358794437abe40a3b895ba345d25128dbd
  }
}

export default App;
