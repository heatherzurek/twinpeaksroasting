import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import InventoryList from './InventoryList';
import AddInventory from './AddInventory';


function App() {
  return (
    <div>

      <Header />
      <Switch>

        <Route exact path='/' component={InventoryList} />

        <Route path='/addinventory' component={AddInventory} />

      </Switch>
    </div>
  );
}

export default App;
