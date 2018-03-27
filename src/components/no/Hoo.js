import React, {Component} from 'react';
import Header from './Header';
import StyleSwitch from './StyleSwitch';
import SideNav from './SideNav';
import ContentArea from './ContentArea';
class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <StyleSwitch></StyleSwitch>
        <SideNav></SideNav>
        <ContentArea></ContentArea>
      </div>
    )
  }
}
export default Home;
