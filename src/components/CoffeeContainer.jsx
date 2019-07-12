import React from 'react'

class CoffeeContainer extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        formVisibleOnPage: false
      };
    }

  render( {
    return(
      <div>
        <p>This is the CoffeeContainer component!</p>
      </div>
    );
  }
}

export default CoffeeContainer;
