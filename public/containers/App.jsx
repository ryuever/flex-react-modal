import React, {Component, PropTypes} from 'react';
import LeftNav from './LeftNav'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex-app">
        <LeftNav />
        <div className="main-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
