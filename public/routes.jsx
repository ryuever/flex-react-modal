import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import FlexModal from './containers/FlexModal';
import FlexInput from './containers/FlexInput';
import FlexButton from './containers/FlexButton';
import FlexDropdown from './containers/FlexDropdown';
import FlexSwitch from './containers/FlexSwitch';

export default () => {
  return (
    <Route path="/">
      <IndexRoute component={App} />
      <Route component={App}>
        <Route path="/modal" component={FlexModal} />
        <Route path="/input" component={FlexInput} />
        <Route path="/button" component={FlexButton} />
        <Route path="/dropdown" component={FlexDropdown} />
        <Route path="/switch" component={FlexSwitch} />
      </Route>
    </Route>
  )
}
