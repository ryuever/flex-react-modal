import React, {Component, PropTypes} from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

import Util from './Util';

export default class FlexReactModal extends Component {
  constructor(props) {
    super(props);

    const { config } = this.props;
    this.config = config;

    this.handleHeaderClick = this.handleHeaderClick.bind(this);

    this.state = {
      item: this.config[0]
    }
  }

  handleHeaderClick(processedItem) {
    let item = Util.fetchWithkey('header', processedItem, this.config);

    this.setState({
      item: item
    })
  }

  render() {
    const { item } = this.state;

    return (
      <div className="flex-modal">
        <div className="flex-modal-middle-base">
        </div>
        <div className="flex-modal-content">
          <div className="flex-modal-header">
            <ModalHeader
             handleHeaderClick={this.handleHeaderClick}
             config={this.config}
            />
          </div>
          <div className="flex-modal-body">
            <ModalBody
             content={item.content}
            />
          </div>
          <div className="flex-modal-footer">
            <ModalFooter
             footer={item.footer}
            />
          </div>
        </div>
      </div>
    )
  }
}
