import React, { Component, PropTypes} from 'react';

import {
  FlexDropdownNormal
}from '../components/FlexDropdownGroup'


export default class FlexDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dropdown-group">
        <FlexDropdownNormal />
      </div>
    )
  }
}
