import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

// layout
import Home from './home';
import Login from './login';
import NoMatch from '../components/noMatch';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/scss">
        <Home setMainContent="scss" />
      </Route>
      <Route path="/js">
        <Home setMainContent="js" />
      </Route>
      <Route path="/react">
        <Home setMainContent="react" />
      </Route>
      <Route path="/router">
        <Home setMainContent="router" />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
