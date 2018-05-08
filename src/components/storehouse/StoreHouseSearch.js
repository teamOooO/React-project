import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;


const mapDispach = (dispatch,form) => {
  return {
    handleSearch: (e) => {
      // console.log(form)
      e.preventDefault();
      form.form.validateFields((err, values) => {
        fetch('/api/storehouse/search',{
          method: 'POST',
          headers : { 
            'Content-Type': 'application/x-www-form-urlencoded',
        },
          body:"goodName=" + values.goodName
        })
        .then(response => response.json())
        .then((result) => {
          const data = result.data.map((item) => (Object.assign({},item,{"key": item._id}))) 
          dispatch({
            type: 'SEARCH_GOODNAME',
            list: data
          })
        })


      });
    },

    handleReset : () => {
      form.form.resetFields();
    }

  }
}


class AdvancedSearchForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };

    // To generate mock Form.Item
    const children = [];
   
      children.push(
        <Col span={8} key={'name'}>
          <FormItem {...formItemLayout} label={'商品名'}>
            {getFieldDecorator(`goodName`)(
              <Input placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
      );
 

    const shownCount =  children.length 
    return (
      <Form
        className="ant-advanced-search-form"
        // onSubmit={this.handleSearch}
      >
        <Row gutter={40}>
          {children.slice(0, shownCount)}
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" onClick={this.props.handleSearch}>Search</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.props.handleReset}>
              Clear
            </Button>
           
          </Col>
        </Row>
      </Form>
    );
  }
}

const SearchForm= connect(null,mapDispach)(AdvancedSearchForm)

const StoreHouseSearch = Form.create()(SearchForm);

export default StoreHouseSearch