import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom";
import classNames from 'classnames';

// import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome-webpack';

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
    const {
      placeholder,
      classnames,
      refer,
      type,
      readMode,

      // control on addon
      hasAddon,
      provider,
      addonType,
      iconClass,
      iconHidden,
      addonContent
    } = this.props;

    let inputClass = classnames;

    switch(readMode) {
      case 'read-only':
        inputClass = classNames(inputClass, {"read-only": true})
        break;
      case 'forbidden':
        inputClass = classNames(inputClass, {forbidden: true})
        break;
    }

    let buttonAddonClass = () => {
      if (hasToggle) {
        return 'flex-btn flex-dropdown-toggle';
      } else {
        return 'flex-btn';
      }
    }

    let renderAddon = () => {
      if (hasAddon) {
        switch(addonType) {
          case "text":
            return (
              <span className="flex-input-group-addon">
                {addonContent}
              </span>
            );
          case "icon":
            if (provider === 'font-awesome') {
              return (
                <span className="flex-input-group-addon">
                  <i className={iconClass} aria-hidden={iconHidden}></i>
                </span>
              )
            } else {
              return null
            }
          case "button":
            return (
              <div className="flex-input-group-btn">
                <button type="button" className={buttonAddonClass}>
                </button>
              </div>
            )
          default:
            return null;
        }
      } else {
        return null;
      }
    }

    let renderInputClass = () => {
      if (hasAddon) {
        return 'flex-input-group'
      } else {
        return 'flex-input-item'
      }
    }

    return (
      <div className={renderInputClass()}>
        { renderAddon() }
        <input
         placeholder={placeholder}
         className={inputClass}
         type={type}
         onBlur={this.handleBlur}
         onChange={this.handleChange}
         value={this.state.value}
        />
      </div>
    )
  }
}

FlexInput.propTypes = {
  placeholder: PropTypes.string,
  refer: PropTypes.string,
  readMode: PropTypes.string
}
