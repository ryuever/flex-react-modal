import React, { Component } from 'react';

export default class FlexButton extends Component {

  render() {
    const { classnames } = this.props

    return (
      <button
       className= {classnames}
       >
        确定
      </button>
    )
  }
}
