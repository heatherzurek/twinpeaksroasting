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
      masterInventoryList: [
        {name: 'Cherry Pie', tasting: 'Dark Chocolate and Cherry', origins: 'Central and South American', price: '15.99'},

        {name: 'Fire Walk', tasting: 'Hazelnut, Toasted Marshmallow, Hint of Navel Orange.', origins: 'Central America, South America, and the Pacific Rim', price: '15.99'},

        {name: 'Log Lady', tasting: 'Bakers Chocolate, Walnut, Sweet Tobacco, Cinnamon', origins: 'Ecuador', price: '14.99'},

        {name: 'Laura Palmer', tasting: 'Molasses, Marrionberry, and Vanilla', origins: 'Central and South American', price: '15.99'}
      ]
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
