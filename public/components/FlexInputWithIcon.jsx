import React, { Component, PropTypes} from 'react';

import { FlexInput } from '../../dist/FlexReactForm';

export class FlexInputWithIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlexInput
       classnames="flexible flex-input"
       provider="font-awesome"
       iconClass="fa fa-envelope-o fa-fw"
       iconHidden="true"
       hasAddon={true}
       addonType="icon"
       placeholder='normal'
       onSave={()=> {}}
      />
    )
  }
}

export class FlexInputWithContentIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlexInput
       classnames="flexible flex-input"
       addonContent="@"
       addonType="text"
       placeholder='normal'
       hasAddon={true}
       onSave={()=> {}}
      />
    )
  }
}
