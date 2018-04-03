import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Signin from './layout/Signin';

import Home from './layout/Home';

class App extends Component{
  render(){
    return (
  
      <Home></Home>
    )
  }
}

export default App;
