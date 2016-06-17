import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class LeftNav extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="leftnav-container">
        <Link to="/modal" className="nav-left-item">modal</Link>
        <Link to="/input" className="nav-left-item">input</Link>
        <Link to="/button" className="nav-left-item">button</Link>
        <Link to="/dropdown" className="nav-left-item">dropdown</Link>
        <Link to="/switch" className="nav-left-item">switch</Link>
      </div>
    )
  }
}
