import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class FlexSwtich extends Component {
  constructor(props) {
    super(props);

    const { checked, disabled } = this.props;

    this.state = ({
      checked: checked,
      disabled: disabled
    });

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const switchClassName = classNames('flex-switch', {
      checked: this.state.checked,
      disabled: this.state.disabled
    });

    const handleClick = this.state.disabled ? ()=>{} : this.handleClick;

    return(
      <div
       className={switchClassName}
       onClick={handleClick}
       >
      </div>
    )
  }
}

FlexSwtich.propTypes = {

}
