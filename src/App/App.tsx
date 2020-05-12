import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '~app/pages/Home';
import './App.module.css';
import HeroProvider from '~app/containers/HeroProvider';

const App = () => (
  <HeroProvider>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </HeroProvider>
);

export default App;
