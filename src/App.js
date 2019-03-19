import React, { Component } from 'react';
import { Route, Router, Switch, Redirect} from 'react-router-dom';
import {history} from 'src/utils/router';

import modules from './modules';
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
            <Route exact path="/home" component={modules.Home} />
            <Route exact path="/login" component={modules.Login} />
            <Redirect path="/" to={{ pathname: '/home' }} />
        </Switch>
      </Router>
    );
  }
}
export default App;
