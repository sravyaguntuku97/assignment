import React, { Component } from "react";
import { Input, Row, Col,Button , Form,Space,Checkbox } from "antd";
import {} from "@ant-design/icons";
import classes from "./login.css";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
error:false,
errorMessage:''
  };
 
  render() {
    const layout = {
        // labelCol: {
        //   span: 8,
        // },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
    const onFinish = values => {
        console.log('Success:', values);
        localStorage.setItem("username",values.username)
        localStorage.setItem("password",values.password)
        if(values.username=='test' && values.password=='test'){
          window.location.href='/users'
        }else{
          this.setState({
            error:true,
            errorMessage: "Oops!! Wrong Username or Password... Please Try again"
          })
       
                }
        // window.location.href='/users'
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return (
      <div style={{ marginTop:"5rem"}}>
        <Col span={8} offset={8}>
    
          <h1>LOGIN PAGE</h1>
          <br />
          <br />
          <div>
          <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    {this.state.error?(
      <div>
         <h2 style={{color:"red"}}>{this.state.errorMessage}</h2>
      </div>
      
      ):(null)}
          </div>

        </Col>
      </div>
    );
  }
}
