import React, { Component, PropTypes } from 'react';
import {
  FlexSwitchDefault,
  FlexSwitchChecked,
  FlexSwitchDefaultDisabled,
  FlexSwitchCheckedDisabled
} from '../components/FlexSwitchGroup';

export default class FlexSwitch extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="flex-switch-container">
        <FlexSwitchDefault />
        <FlexSwitchChecked />
        <FlexSwitchDefaultDisabled />
        <FlexSwitchCheckedDisabled />
      </div>
    )
  }
}

FlexSwitch.propTypes = {

}
