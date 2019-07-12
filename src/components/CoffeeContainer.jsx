import React from 'react';
import AdminLogin from './AdminLogin';
import AddInventory from './AddInventory';
import PropTypes from 'prop-types';

class CoffeeContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.handleAdminConfirm = this.handleAdminConfirm.bind(this);
  }

handleAdminConfirm(){
  this.setState({formVisible: true});
}

  render() {
    let contentVisible = null;
    if (this.state.formVisible){
      contentVisible = <AddInventory onNewInventoryCreation={this.props.onNewInventoryCreation}/>;
    } else {
      contentVisible = <AdminLogin onAdminConfirm={this.handleAdminConfirm} />;
    }
    return(
      <div>
        {contentVisible}
      </div>
    );
  }
}

CoffeeContainer.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default CoffeeContainer;
