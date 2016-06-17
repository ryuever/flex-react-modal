import React, { Component, PropTypes} from 'react';

import { FlexInput } from '../../dist/FlexReactForm';

export default class FlexInputNormal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlexInput
       classnames="flexible flex-input"
       placeholder='normal'
       onSave={()=> {}}
      />
    )
  }
}
