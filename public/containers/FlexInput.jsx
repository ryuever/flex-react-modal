import React, { Component, PropTypes} from 'react';
import FlexInputNormal from '../components/FlexInputNormal';
import FlexInputForbidden from '../components/FlexInputForbidden';
import FlexInputReadOnly from '../components/FlexInputReadOnly';

import {
  FlexInputWithContentIcon,
  FlexInputWithIcon
} from '../components/FlexInputWithIcon';

export default class FlexInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-group">
        <FlexInputNormal />
        <FlexInputForbidden />
        <FlexInputReadOnly />
        <FlexInputWithIcon />
        <FlexInputWithContentIcon />
      </div>
    )
  }
}
