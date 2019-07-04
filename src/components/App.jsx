import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import { Switch, Route } from 'react-router-dom';
import Inventory from './Inventory';
import AddInventory from './AddInventory';


function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Switch>
      <Route exact path='/' component={Inventory} />
        <Route path='/addinventory' component={AddInventory} />

      </Switch>
    </div>
  );
}

export default App;
