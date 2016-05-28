import React, {Component, PropTypes} from 'react';
import FlexInput from './FlexInput';
import FlexButton from './FlexButton';

export default class ModalBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content } = this.props;

    if (!content) {
      return null;
    }
    let displayContent = content.map((item, key) => {

      switch(item.component) {
        case 'FlexInput':
          return (
            <FlexInput
             classnames="flexible flex-input"
             key={key}
             placeholder={item.placeholder}
            />
          );

        case 'FlexButton':
          return (
            <FlexButton
             key={key}
             classnames="flex-btn"
             content={item.content}
            />
          );
      }
    })

    return (
      <div className="modal-body-container">
        <div className="flex-input-group">
          {displayContent}
        </div>
      </div>
    )
  }
}
