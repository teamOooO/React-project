import React from 'react'
import {
  Form, Button, Upload, Icon, Input
} from 'antd';
const FormItem = Form.Item;
class Demo extends React.Component {
	constructor(props) {
	  super(props);
	
  		console.log(this.props)
	  this.state = {
	  	fileList:""
	  };
	}
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    if ((/^\/edit/g).test(this.props.match.path)) {
    	var data = new FormData()
		data.append('pictureUrl', this.file)
		data.append('adName', e.target.adName.value)
	    
		fetch('/api/commodity/slideshowEdit/'+ this.props.match.params.id , {
		  method: 'POST',
		  body: data
		})
			.then(response => response.json())
			.then((res) => {
				
			})
    }
	var data = new FormData()
	data.append('pictureUrl', this.file)
	data.append('adName', e.target.adName.value)
    
	fetch('/api/commodity/slideshowAdd', {
	  method: 'POST',
	  body: data
	})
		.then(response => response.json())
		.then((res) => {
			console.log(res)
		})
	this.props.form.setFieldsValue({
    	adName:"",
    	upload:""
    })
  }	
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.filelist;
  }

  onTabClick(){
  	this.props.history.push('/banner')
  }

  componentDidMount(){
  	if ((/^\/edit/g).test(this.props.match.path)) {
  		fetch('/api/commodity/find')
  			.then(response => response.json())
  			.then((res) => {
  				console.log(res)
  				res.data.result.forEach((item) => {
  				  if (item.id == this.props.match.params.id) {
  				  	this.setState({fileList:[{
			            uid: -1,
			            name: item.adName,
			            status: 'done',
			            url: item.pictureUrl
			        }]})
  				  	this.props.form.setFieldsValue({
				    	adName:item.adName
				    })
  				  }
  				})
  			})
  	}
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
      	<FormItem wrapperCol={{ span: 12, offset: 6 }}>
          {getFieldDecorator('adName', {
            rules: [{ required: true, message: '请输入图片名称！' }],
          })(
            <Input style={{ width: 400 }} prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入图片名称！" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label=""
          extra="请上传图片文件"
          wrapperCol={{ span: 12, offset: 6 }}
        >
          {getFieldDecorator('upload', {
            valuePropName: 'filelist',
            getValueFromEvent: this.normFile,
          })(
          <div>
            <Upload 
            	name="pictureUrl" 
            	listType="picture"
            	fileList = {this.state.fileList}
            	onChange = { () => this.onChangeUrl()}
            	beforeUpload = {(file,fileList) => {
            		this.file = file
            		return false
            	}}
            >
              <Button>
                <Icon type="upload" /> 上传
              </Button>
            </Upload>
           </div>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button style={{ marginRight: 250 }} onClick={() => this.onTabClick()}>返回</Button>
          <Button type="primary" htmlType="submit" >提交</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(Demo);