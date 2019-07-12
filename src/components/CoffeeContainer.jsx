import React from 'react';
import AdminLogin from './AdminLogin';
import AddInventory from './AddInventory';

class CoffeeContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

// handleClick(){
//   this.setState({formVisible: true});
//   console.log('formVisible is currently set to:' + this.state.formVisible);
// }

  render() {
    let contentVisible = null;
    if (this.state.formVisible){
      contentVisible = <AddInventory />;
    } else {
      contentVisible = <AdminLogin />;
    }
    return(
      <div>
        {contentVisible}
      </div>
    );
  }
}

export default CoffeeContainer;
