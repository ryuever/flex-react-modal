import React, {Component, PropTypes} from 'react';
import FlexInput from './FlexInput';
import FlexButton from './FlexButton';

export default class ModalBody extends Component {
  render() {
    return (
      <div className="modal-body-container">
        <div className="flex-input-group">
          <FlexInput
            placeholder='请输入姓名'
            classnames="flexible flex-input"
          />
          <FlexInput
            placeholder='请输入密码'
            classnames="flexible flex-input"
          />
          <FlexButton
           classnames="flex-btn"
          />
        </div>
      </div>
    )
  }
}
