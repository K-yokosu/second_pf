import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';

// layout
import Home from './home';
import Login from './login';
import Mypage from './mypage';


class Default extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/mypage" component={Mypage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Default;
