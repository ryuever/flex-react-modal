import React, {Component, PropTypes} from 'react';

export default class ModalHeader extends Component {

  constructor(props) {
    super(props);
  }

  _handleClick(header) {
    const { handleHeaderClick } = this.props;

    handleHeaderClick(header);
  }

  render() {

    const { config } = this.props;

    let header = '';

    header = config.map((item, key) => {
      return (
        <li
         className="nav-item"
         key={key}
         onClick={this._handleClick.bind(this, item.header)}
         >
          {item.header}
        </li>
      )
    })

    return (
      <div className="flex-modal-header-container">
        <div className="icon">
        </div>
        <div className="nav-bar-body">
          <ul className="nav-bar">
            {header}
          </ul>
        </div>
      </div>
    )
  }
}

ModalHeader.propTypes = {
  config: PropTypes.array.isRequired
}
