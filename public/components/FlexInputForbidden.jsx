import React, { Component, PropTypes} from 'react';

import { FlexInput } from '../../dist/FlexReactForm';

export default class FlexInputForbidden extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlexInput
       classnames="flexible flex-input"
       placeholder='fobidden'
       onSave={()=> {}}
       readMode="forbidden"
      />
    )
  }
}
