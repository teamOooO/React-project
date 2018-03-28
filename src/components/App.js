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
import {Switch, Route, Link} from 'react-router-dom';

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
