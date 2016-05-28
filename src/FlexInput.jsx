import React, { Component } from 'react';

export default class FlexInput extends Component {

  constructor(props){
    super(props);
  }

  render() {

    const { placeholder, classnames } = this.props;

    return (
      <input
       placeholder={placeholder}
       className={classnames}
      />
    )
  }
}
