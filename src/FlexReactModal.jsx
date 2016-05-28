import React, {Component, PropTypes} from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

export default class FlexReactModal extends Component {
  constructor(props) {
    super(props);


    this.config = [
      {
        header: '登陆',
        content: [
          {
            component: 'FlexInput',
            placeholder: '请输入姓名',
          },
          {
            component: 'FlexInput',
            placeholder: '请输入密码',
            type: 'password'
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-middle-base">
        </div>
        <div className="modal-content">
          <div className="modal-header">
            <ModalHeader />
          </div>
          <div className="modal-body">
            <ModalBody />
          </div>
          <div className="modal-footer">
            <ModalFooter />
          </div>
        </div>
      </div>
    )
  }
}
