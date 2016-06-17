import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import {
  FlexSwitch
} from '../../dist/FlexReactForm';

export class FlexSwitchDefault extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FlexSwitch
      />
    )
  }
}

export class FlexSwitchChecked extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FlexSwitch
       checked={true}
      />
    )
  }
}

export class FlexSwitchDefaultDisabled extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FlexSwitch
       disabled={true}
      />
    )
  }
}

export class FlexSwitchCheckedDisabled extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FlexSwitch
       checked={true}
       disabled={true}
      />
    )
  }
}
