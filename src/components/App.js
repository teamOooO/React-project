import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Signin from './layout/Signin';

import Home from './layout/Home';
import HomeRoute from './route/HomeRoute';
import HomeCon from './route-con/HomeCon';

import ProductListRoute from './route/ProductListRoute';
import ProductListCon from './route-con/ProductListCon';

class App extends Component{
  render(){
    return (
      <Switch>
        <Route path='/' exact component={Signin}></Route>
        <Route path='/home' component={Home}></Route>
      </Switch>
    )
  }
}


// class App extends Component {
//   render() {
//     return (
//       <Layout></Layout>
//     );
//   }
// }

export default App;
