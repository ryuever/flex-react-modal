import React, { Component } from 'react';
import ReactDOM from "react-dom";

export default class FlexInput extends Component {

  constructor(props){
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state ={
      value: this.props.value || ''
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleBlur(e) {
    const { onSave, refer } = this.props;

    let data = {};
    data[refer] = e.target.value;

    onSave(data);
  }

  render() {
    const { placeholder, classnames, refer, type } = this.props;

    return (
      <input
       placeholder={placeholder}
       className={classnames}
       type={type}
       onBlur={this.handleBlur}
       onChange={this.handleChange}
       value={this.state.value}
      />
    )
  }
}
