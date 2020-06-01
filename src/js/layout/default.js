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
              <Home setMainContent="scss" />
            </Route>
            <Route exact path="/js">
              <Home setMainContent="js" />
            </Route>
            <Route exact path="/react">
              <Home setMainContent="react" />
            </Route>
            <Route exact path="/router">
              <Home setMainContent="router" />
            </Route>
            <Redirect from="/" to="/scss" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Default;
