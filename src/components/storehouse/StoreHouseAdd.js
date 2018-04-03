import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form, Input, Upload, Icon  } from 'antd';
const FormItem = Form.Item;


const mapStateToProps = (state) => {
  return {
    visible: state.visiblereducer,
    editData: state.editreducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => {
      dispatch({type:'HIDDLE_ADD', visible: true });
    },
    
    handleCancel: () => {
      dispatch({type:'HIDDLE_ADD', visible: false });
    },

    handleCreate:() => {
      _form.validateFields((err, values) => {
        if (err) {
          return;
        }
        const {goodImg,goodName,count} = values
        console.log('Received values of form: ', values);
        fetch('/api/storehouse/add',{
          method: 'POST',
          data:{goodImg,goodName,count}
        })
        .then(response => response.json())
        .then(result =>{
          console.log(result)
         
        })

        _form.resetFields();
        dispatch({type:'HIDDLE_ADD', visible: false });
      })
    }

  }
}

var _form = null

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form, editData } = props;
    const { getFieldDecorator } = form;
    _form = form
    return (
      <Modal
        visible={visible}
        title="添加商品信息"
        okText="添加"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="商品名称">
            {getFieldDecorator('goodName',{initialValue:editData.goodName}, {
              rules: [{ required: true, message: '请输入商品名称' }],
            })(
              <Input  />
            )}
          </FormItem>
          <FormItem label="库存">
            {getFieldDecorator('count',{initialValue:editData.count})(<Input type="textarea"  />)}
          </FormItem>

          {/* 
            <FormItem label="商品图片">
              {getFieldDecorator('goodImg')(<Input type="file" />)}
            </FormItem>
          */}

          <FormItem label="上传图片">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload beforeUpload={ () => false } name="goodImg" action="/api/storehouse/add" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </FormItem>
          
        </Form>
      </Modal>
    );
  }
);

class StoreHouse extends Component {


  saveFormRef = (form) => {
    this.form = form;
  }
  render() {
    // console.log(this.props.editData)
    return (
      <div>
        <Button type="primary" onClick={this.props.showModal}>添加</Button>
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.props.visible}
          onCancel={this.props.handleCancel}
          onCreate={this.props.handleCreate}
          editData={this.props.editData}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreHouse)