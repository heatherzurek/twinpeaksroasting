import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import InventoryList from './InventoryList';
import CoffeeContainer from './CoffeeContainer';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={InventoryList} />
        <Route path='/coffeecontainer' component={CoffeeContainer} />
      </Switch>
    </div>
  );
}

export default App;
