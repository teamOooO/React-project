import React, { Component } from 'react';
import StoreHouseList from '../storehouse/StoreHouseList'
import CollectionsPage from '../storehouse/StoreHouseAdd'
import StoreHouseSearch from '../storehouse/StoreHouseSearch'
class StoreHouse extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ([
          <CollectionsPage key="add"></CollectionsPage>,
          <StoreHouseSearch key="search"></StoreHouseSearch>,
          <StoreHouseList key="list"></StoreHouseList>
        ]
      )
    }
}

export default StoreHouse