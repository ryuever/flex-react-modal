import React, { Component } from 'react';

export default class FlexButton extends Component {

  render() {
    const { classnames, content } = this.props

    return (
      <button
       className= {classnames}
       >
       {content}
      </button>
    )
  }
}
