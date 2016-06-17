import React, { Component } from 'react';

export default class FlexTag extends Component {

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
