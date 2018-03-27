import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Home from './layout/Home';

class Layout extends Component{
  render(){
    return (
      <div>
        <Route path='/' exact component={Home}></Route>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Layout></Layout>
    );
  }
}

export default App;
