import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from '../views/Home'
import Test from '../views/Test'

import * as ROUTES from './constants';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.ROOT} component={Home}/>
      <Route exact path={"/test"} component={Test}/>
      <Redirect to={ROUTES.NOT_FOUND} />
    </Switch>
  );
};

export default Routes;
