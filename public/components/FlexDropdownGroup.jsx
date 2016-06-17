import React, { Component, PropTypes} from 'react';

import { FlexDropdown } from '../../dist/FlexReactForm';

export class FlexDropdownNormal extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let dropdownGroup = [
      [
        {link: '/modal', content: 'Modal'},
        {link: '/input', content: 'Input'},
        {link: '/button', content: 'Button'}
      ],
      [
        {link: '/', content: 'Home'}
      ]
    ];

    return (
      <FlexDropdown
       dropdownContent="Action"
       hasDropdownMenu={true}
       dropdownGroup={dropdownGroup}
      />
    )
  }
}
