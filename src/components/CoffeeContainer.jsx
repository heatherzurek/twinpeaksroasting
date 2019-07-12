import React from 'react';
import AdminLogin from './AdminLogin';
import AddInventory from './AddInventory';

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
      contentVisible = <AddInventory />;
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

export default CoffeeContainer;
