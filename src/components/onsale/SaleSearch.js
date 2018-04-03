import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Icon,
  DatePicker,
  Select
} from 'antd';

const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const FormItem = Form.Item;
const fields = ['活动名称'] //'活动时间','至','促销状态', '商品编码', '货号'
let _this = null;

class AdvancedSearchForm extends Component {
  constructor(props) {
    super(props);
    _this = this;
  }
  state = {
    expand: false
  };

  handleReset = () => {
    this
      .props
      .form
      .resetFields();
  }

  toggle = () => {
    const {expand} = this.state;
    this.setState({
      expand: !expand
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      }
    };

    const formItemLayoutTimePicker = {
      labelCol: {
        xs: {
          span: 5
        },
        sm: {
          span: 3
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 16
        }
      }
    };
    const rangeConfig = {
      rules: [
        {
          type: 'array',
          message: 'Please select time!'
        }
      ]
    };
    // function handleChange(value) {   console.log(`selected ${value}`); } To
    // generate mock Form.Item
    const children = [];
    // for (let i = 0; i < fields.length; i++) {
    children[0] = (
      <Col span={8} key={"name"}>
        <FormItem {...formItemLayout} label={fields[0]}>
          {getFieldDecorator("name")(<Input placeholder={`请输入${fields[0]}`}/>)}
        </FormItem>
      </Col>
    );

    // children[3] = <Col span={12} key={3}>   <FormItem
    // {...formItemLayoutTimePicker} label="活动时间">
    // {getFieldDecorator('range-picker', rangeConfig)(<RangePicker/>)} </FormItem>
    // </Col> children[4] = <Col span={8} key={4}>   <FormItem {...formItemLayout}
    // label="促销状态">     {getFieldDecorator('status-select')(    <Select style={{
    //      width: 200       }} onChange={handleChange}>         <Option
    // value="all">全部</Option> <Option value="cur">有效活动</Option>         <Option
    // value="stop">已暂停</Option>       <Option value="end">已结束</Option> </Select>
    //  )}   </FormItem> </Col>

    const expand = this.state.expand;
    const shownCount = expand
      ? children.length
      : 6;
    const _this = this;
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.props.handleSearch}>
        <Row gutter={40}>
          {children.slice(0, shownCount)}
        </Row>
        <Row>
          <Col span={24} style={{
            textAlign: 'right'
          }}>
            <Button type="primary" htmlType="submit">搜索</Button>
            <Button
              style={{
              marginLeft: 8
            }}
              onClick={this.handleReset}>
              清除
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {list: state.list}
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch(e) {
      e.preventDefault();
      _this
        .props
        .form
        .validateFields((err, values) => {
          fetch('/api/onsale/search', {
            method: "POST",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
              body: "keyword=" + values.name
            })
            .then(response => response.json())
            .then(result => {
              if (result.ret) 
                dispatch({type: 'SEARCH', payload: result.lst})
            })
        });
    }
  }
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

const searchForm = connect(mapStateToProps, mapDispatchToProps)(WrappedAdvancedSearchForm);

export default searchForm;