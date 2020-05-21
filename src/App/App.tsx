import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '~app/pages/Home';
import './App.module.css';
import HeroProvider from '~app/containers/HeroProvider';
import Profile from '~app/pages/Profile';
import Arena from '~app/pages/Arena';
import NotFound from '~app/pages/404';

const App = () => (
  <HeroProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/arena/:slug" component={Arena} />
      <Route path="/profile/:slug" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </HeroProvider>
);

export default App;
