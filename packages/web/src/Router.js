import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/Signin';
import Home from './pages/Home';
import Teste from './pages/Teste';

export default function Router() {
   return (
      <Switch>
         <Route exact path={['', '/']} component={Home} />
         <Route exact path="/sign-in" component={SignIn} />
         <Route exact path="/teste" component={Teste} />
      </Switch>
   );
}