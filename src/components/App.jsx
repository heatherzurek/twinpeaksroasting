import React from 'react';
import Header from './Header';
import InventoryList from './InventoryList';
import CoffeeContainer from './CoffeeContainer';
import AdminLogin from './AdminLogin';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterInventoryList: []
    };
    this.handleNewInventory = this.handleNewInventory.bind(this);
  }

  handleNewInventory(newInventory){
    var newMasterInventoryList = this.state.masterInventoryList.slice();
    newMasterInventoryList.push(newInventory);
    this.setState({masterInventoryList: newMasterInventoryList});
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={()=><InventoryList inventoryList={this.state.masterInventoryList} />} />
            <Route path='/addinventory' render={()=><CoffeeContainer onNewInventoryCreation={this.handleNewInventory} />} />
        </Switch>
      </div>
    );
  }

}

export default App;
