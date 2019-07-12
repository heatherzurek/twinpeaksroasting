import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import InventoryList from './InventoryList';
import CoffeeContainer from './CoffeeContainer';
import AdminLogin from './AdminLogin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterInventoryList: []
    };
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={InventoryList} />
          <Route path='/addinventory' component={CoffeeContainer} />
        </Switch>
      </div>
    );
  }

}

export default App;
