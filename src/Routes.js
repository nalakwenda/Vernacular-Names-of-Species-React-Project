import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Homepage';

import Details from './pages/Details';
import PageNotFound from './pages/PageNotFound';

function Routes () {

    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Details/:id/' component={Details} />
        <Route  component={PageNotFound} />

      </Switch>
    );
  }


export default Routes;
