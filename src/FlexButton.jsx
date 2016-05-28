import React, { Component } from 'react';

export default class FlexButton extends Component {

  render() {
    const { classnames, content, handleClick } = this.props

    return (
      <button
       className= {classnames}
       onClick={handleClick}
       >
       {content}
      </button>
    )
  }
}
