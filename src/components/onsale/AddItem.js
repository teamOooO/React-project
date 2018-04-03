import React, {Component} from 'react';
import {connect} from 'react-redux'

import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Icon,
  DatePicker,
  Select,
  Radio,
  InputNumber
} from 'antd';
import moment from 'moment';
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
const RadioGroup = Radio.Group;

const FormItem = Form.Item;

let pAddItem = null;
class AddItem extends Component {
  state = {
    expand: false,
    formdata: {}
  };
  constructor(props) {
    super(props)
    pAddItem = props;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFieldsAndScroll((err, values) => {
        if (!err) {
          var d = new Date(values['range-picker'][0].toString());
          const startWant = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          var end = new Date(values['range-picker'][1].toString());
          const endWant = end.getFullYear() + '-' + (end.getMonth() + 1) + '-' + end.getDate();
          //通过curitem是否为空判断是更新还是新增
          if (Object.keys(this.props.curitem).length != 0) {
            this
              .props
              .updateItems({
                id: this.props.curitem._id,
                name: values.name,
                status: "满" + values.rule + "元",
                time: startWant + "至" + endWant,
                type: values["status-select"]
              })
          } else {
            this
              .props
              .addItems({
                name: values.name,
                status: "满" + values.rule + "元",
                time: startWant + "至" + endWant,
                type: values["status-select"]
              })
          }

          this
            .props
            .handleReturn();
        }
      });
  }

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
    const {curitem} = this.props;
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      }
    };

    const children = [];

    children[0] = <FormItem key="0" {...formItemLayout} label={'活动名称'}>
      {getFieldDecorator('name', {initialValue: curitem.name})(<Input placeholder={`请输入活动名称`}/>)}
    </FormItem>
    if (curitem.status) 
      var num = parseInt(curitem.status.replace(/[^0-9]/ig, ""));
    
    // console.log(num)
    children[1] = <FormItem key="1" {...formItemLayout} label={"活动规则"}>
      {getFieldDecorator('rule')(
        <div>
          <span>满&nbsp;&nbsp;</span><InputNumber min={1} defaultValue={num}/>
          <span>&nbsp;&nbsp;元</span>
        </div>
      )}
    </FormItem>

    children[2] = <FormItem key="2" {...formItemLayout} label="参与方式">
      {getFieldDecorator('type', {initialValue: 'all'})(
        <RadioGroup>
          <Radio value={'all'}>全场参加</Radio>
          <Radio value={'join'}>部分商品参加</Radio>
          <Radio value={'nojoin'}>部分商品不参加</Radio>
        </RadioGroup>
      )}
    </FormItem>
    var start = null,
      end = null;
    if (curitem.time) {
      var arr = curitem
        .time
        .split("至");
      start = arr[0],
      end = arr[1];
    } else {
      const now = new Date();
      start = now.toLocaleString();
      now.setMonth(now.getMonth() + 1);
      end = now.toLocaleDateString();
    }

    children[3] = <FormItem key="3" {...formItemLayout} label="活动时间" format="YYYY-MM-DD HH:mm:ss">
      {getFieldDecorator('range-picker', {
        initialValue: [
          moment(start, 'YYYY-MM-DD'),
          moment(end, 'YYYY-MM-DD')
        ],
        rules: [
          {
            type: 'array',
            required: true,
            message: 'Please select time!'
          }
        ]
      })(<RangePicker/>)}
    </FormItem>

    children[4] = <FormItem key="4" {...formItemLayout} label="促销类型">
      {getFieldDecorator('status-select', {initialValue: curitem.type})(
        <Select style={{
          width: 200
        }}>
          <Option value="满减">满减促销</Option>
          <Option value="满赠">满赠促销</Option>
        </Select>
      )}
    </FormItem>

    const expand = this.state.expand;
    const shownCount = expand
      ? children.length
      : 6;
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
        <Row gutter={40}>
          {children.slice(0, shownCount)}
        </Row>
        <Row>
          <Col span={24} style={{
            textAlign: 'right'
          }}>
            <Button type="primary" htmlType="submit">提交</Button>
            <Button
              style={{
              marginLeft: 8
            }}
              onClick={this.props.handleReturn}>
              返回
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedAddItem = Form.create()(AddItem);

const mapStateToProps = (state) => {
  return {list: state.list, curitem: state.curItem}
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItems: (res) => {
      const {type, time, status, name} = res;
      fetch('/api/onsale/add', {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
          body: `type=${type}&time=${time}&status=${status}&name=${name}`
        })
        .then(response => response.json())
        .then(result => {
          if (result.ret) {
            res._id = result.lst.id;
            dispatch({type: 'ADD', payload: res})
          }
        })
    },
    updateItems: (res) => {
      const {id, type, time, status, name} = res;
      fetch('/api/onsale/update', {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
          body: `type=${type}&time=${time}&status=${status}&name=${name}&id=${id}`
        })
        .then(response => response.json())
        .then(result => {
          if (result.ret) {
            console.log(res)
            dispatch({type: 'UPDATE', payload: res})
          }
        })
    },
    handleReturn: () => {
      pAddItem
        .history
        .push('/onsale');
      //清空
      dispatch({type: 'CLEAR'})
    }
  }
}

const Item = connect(mapStateToProps, mapDispatchToProps)(WrappedAddItem)
export default Item;