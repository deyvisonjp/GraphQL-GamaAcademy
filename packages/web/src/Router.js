import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/Signin';
import Home from './pages/Home';

export default function Router() {
   return (
      <Switch>
         <Route exact patch={['', '/']} component={Home} />
         <Route exact path="/sign-in" component={SignIn} />
      </Switch>
   );
}