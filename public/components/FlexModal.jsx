import React, {Component, PropTypes} from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import router from './routes';
import { Router, Route, Link, browserHistory } from 'react-router'

import FlexReactModal from '../dist/flex-react-modal';
import '../dist/style.css';

class FlexModal extends Component {
  constructor(props) {
    super(props);

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);

    this.config = [
      {
        header: '登陆',
        content: [
          {
            component: 'FlexInput',
            placeholder: '请输入姓名',
            refer: 'name'
          },
          {
            component: 'FlexInput',
            placeholder: '请输入密码',
            type: 'password',
            refer: 'login_password'
          },
          {
            component: 'FlexButton',
            content: '确认',
            handleClick: this.onLoginClick
          }
        ]
      },
      {
        header: '注册',
        content: [
          {
            component: 'FlexInput',
            placeholder: '请输入姓名',
            refer: 'register_name'
          },
          {
            component: 'FlexInput',
            placeholder: '请输入密码',
            type: 'password',
            refer: 'register_password'
          },
          {
            component: 'FlexInput',
            placeholder: '请再次输入密码',
            type: 'password',
            refer: 'register_confirmed_password'
          },
          {
            component: 'FlexButton',
            content: '确认',
            handleClick: this.onRegisterClick
          }
        ]
      }
    ]
  }

  onLoginClick(data) {
    console.log('click login : ', data);
    // let name = ReactDOM.findDOMNode(this.refs.name).value;
    // console.log('click login', name);
  }

  onRegisterClick(data) {
    console.log('click register : ', data);
  }

  render() {
    return (
      <div>
        <FlexReactModal
         config={this.config}
        />
      </div>
    )
  }
}
