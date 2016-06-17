import React, { Component, PropTypes} from 'react';
import FlexButtonNormal from '../components/FlexButtonNormal';

export default class FlexButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlexButtonNormal
       onSave={() => {}}
      />
    )
  }
}
