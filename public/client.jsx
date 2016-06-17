import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import router from './routes';

const routes = router();

render(
  <Router history={browserHistory}>
    {routes}
  </Router>, document.getElementById('app'));
