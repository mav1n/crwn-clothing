import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { HomePage } from './containers/Homepage/HomepageComponent';
import ShopPage from './containers/Shop/ShopComponent';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} /> 
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
