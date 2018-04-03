import React, {Component} from 'react';
import { connect } from 'react-redux'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


const mapStateToProps = (state) => {
  return {
    storeList: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (list, his, username, password) => {
      dispatch(() => {
        fetch('/api/users/signin', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(  list  ),
          data: {
            username,
            password
          }
        })
          .then((response) => response.json())
          .then((result) => {
            dispatch({
              type:"expression",
              name:result.data.username
            })
            if (result.data.success) {
                his
            }
          })
      })
    }
  }
}



class Signin extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

    let his = this.props.history.push('/')
    let list = this.props.form.getFieldsValue()
    let username = this.props.form.getFieldsValue().username;
    let password = this.props.form.getFieldsValue().password;
    this.props.loadData(list,his,username,password)
  }
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a>register now!</a>
        </FormItem>
      </Form>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(Signin))
