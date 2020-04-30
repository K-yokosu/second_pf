import React from 'react';
import { Switch, Route } from 'react-router-dom';

//screens
import Home from './home';
import Login from './login';
import Mypage from './mypage';

class Default extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/mypage" component={Mypage} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Home} />
                </Switch>
            </>
        );
    }
}

export default Default;
