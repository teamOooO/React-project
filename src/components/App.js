import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../styles/index.css';

import StoreHouse from './StoreHouse'

class App extends Component {
  render() {
    return( 
    
      <Route path='/storehouse' component={StoreHouse}/>
   
      )
  }
}

export default App;
