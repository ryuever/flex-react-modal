import React, { Component, PropTypes} from 'react';

import { FlexButton } from '../../dist/FlexReactForm';

export default class FlexButtonNormal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlexButton
       classnames="flex-btn flex-btn-primary"
       content='Normal button'
      />
    )
  }
}
