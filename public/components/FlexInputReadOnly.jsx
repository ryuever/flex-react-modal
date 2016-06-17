import React, { Component, PropTypes} from 'react';

import { FlexInput } from '../../dist/FlexReactForm';

export default class FlexInputReadOnly extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlexInput
       classnames="flexible flex-input"
       placeholder='read only'
       onSave={()=> {}}
       readMode="read-only"
      />
    )
  }
}
