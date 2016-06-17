import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import classNames from 'classnames';

import FlexSeperator from './FlexSeperator';

export default class FlexDropdown extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this._handleClick.bind(this);
    this.state = {
      display: false
    }
  }

  _handleClick() {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    const {
      dropdownContent,
      dropdownGroup,
      hasDropdownMenu
    } = this.props;

    let dropdownMenuClass = classNames('flex-dropdown-menu', { open: this.state.display});

    let renderGroup = (group) => {
      return group.map((item, key) => {
        return (
          <Link
           to={item.link}
           className="flex-dropdown-item flex-href-as-btn"
           key={key}
           >{item.content}</Link>
        )
      })
    }

    let renderDropdownMenu = () => {

      if (hasDropdownMenu) {
        let groupLength = dropdownGroup.length;

        return (
          <div className={dropdownMenuClass}>
            {
              dropdownGroup.map((group, key) => {
                if (key < (groupLength - 1) ) {
                  return (
                    React.createElement('div', {key: key}, [renderGroup(group), <FlexSeperator />])
                  )
                } else {
                  return React.createElement('div', {key: key}, [renderGroup(group)])
                }
              })
             }
          </div>
        )
      } else {
        return null
      }
    }

    return (
      <div className="flex-dropdown">
        <button
         className="flex-dropdown-toggle flex-btn flex-btn-large"
         onClick={this.handleClick}
         >
          { dropdownContent }
        </button>
        { renderDropdownMenu() }
      </div>
    )
  }
}
