import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../scss/app.scss';
import Default from './layout/default';
import Login from './layout/login';

ReactDom.render(
  <>
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Default} />
        </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);
