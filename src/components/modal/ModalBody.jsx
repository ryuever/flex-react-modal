import React, {Component, PropTypes} from 'react';
import FlexInput from '../../core/FlexInput';
import FlexButton from '../../core/FlexButton';

export default class ModalBody extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSave = this.handleSave.bind(this);
    this._handleClick = this._handleClick.bind(this)
  }

  handleSave(data) {
    this.setState(
      Object.assign(this.state, data)
    );
  }

  _handleClick(handleClick) {

    handleClick(this.state);
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
             key={`${item.refer}`}
             placeholder={item.placeholder}
             refer={item.refer}
             onSave={this.handleSave}
             value={this.state[item.refer]}
             type={item.type}
            />
          );

        case 'FlexButton':
          return (
            <FlexButton
             key={key}
             classnames="flex-btn"
             content={item.content}
             handleClick={this._handleClick.bind(this, item.handleClick)}
            />
          );
      }
    })

    return (
      <div className="flex-modal-body-container">
        <div className="flex-input-group">
          {displayContent}
        </div>
      </div>
    )
  }
}

ModalBody.propTyeps = {
  content: PropTypes.object.isRequired
}
