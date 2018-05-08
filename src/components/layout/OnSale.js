import React, {Component} from 'react';

import Form from '../onsale/SaleSearch';
import List from '../onsale/ListTable';

class OnSale extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Form></Form>
        <List></List>
      </div>
    )
  }
}

export default OnSale;