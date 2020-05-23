import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

// layout
import Home from './home';


class Default extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/scss">
              <Home setTitle="scss" />
            </Route>
            <Route exact path="/js">
              <Home setTitle="js" />
            </Route>
            <Route exact path="/react">
              <Home setTitle="react" />
            </Route>
            <Route exact path="/router">
              <Home setTitle="router" />
            </Route>
            <Redirect from="/" to="/scss" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Default;
