import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import { Switch, Route } from 'react-router-dom';
import Inventory from './Inventory';
import AddInventory from './AddInventory';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    background-color: 'blue',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>

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
