import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { HomePage } from './containers/Homepage/HomepageComponent';
import ShopPage from './containers/Shop/ShopComponent';
import Header from './components/Header/HeaderComponent';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
