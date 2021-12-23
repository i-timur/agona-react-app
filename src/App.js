import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginForm, RegisterForm, Collection, Add, Search, Profile} from './pages/index';
import { AuthStore } from './stores/AuthStore';

const authStore = new AuthStore();

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/collection' />
      </Route>
      <Route exact path="/collection">
        {authStore.authenticated ? <Collection /> : <Redirect to="/login" />}
      </Route>
      <Route exact path='/add' >
        <Add />
      </Route>
      <Route exact path='/search'>
        <Search />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/register">
        <RegisterForm />
      </Route>
    </Switch>
  );
};

export default App;
