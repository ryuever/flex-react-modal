import React, {Component, PropTypes} from 'react';

export default class ModalHeader extends Component {
  render() {
    return (
      <div className="modal-header-container">
        <div className="icon">
        </div>
        <div className="nav-bar-body">
          <ul className="nav-bar">
            <li className="nav-item" key="1">登陆</li>
            <li className="nav-item" key="2">注册</li>
          </ul>
        </div>
      </div>
    )
  }
}
