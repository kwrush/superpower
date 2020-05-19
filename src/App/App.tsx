import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '~app/pages/Home';
import './App.module.css';
import HeroProvider from '~app/containers/HeroProvider';
import Profile from '~app/pages/Profile';
import Arena from '~app/pages/Arena';

const App = () => (
  <HeroProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/arena" component={Arena} />
      <Route path="/:slug" component={Profile} />
    </Switch>
  </HeroProvider>
);

export default App;
