import React, { Component, PropTypes } from 'react';

import { FlexButton } from '../../dist/FlexReactForm';

import FlexModalTwoColumn from '../components/FlexModalTwoColumn'

export default class FlexModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: ''
    }
  }

  _onClick(type) {
    this.setState({
      type: type
    })
  }

  render() {

    const { type } = this.state;

    let selectedModal = (type) => {
      switch(type) {
        case 'two_column':
          return <FlexModalTwoColumn />;
          break;
        default:
          return null
      }
    }

    return (
      <div className="flex-modal-container">
        {selectedModal(type)}
        <FlexButton
         classnames="flex-btn flex-btn-primary"
         content="open two column modal"
         handleClick={this._onClick.bind(this, 'two_column')}
        />
      </div>
    )
  }
}
