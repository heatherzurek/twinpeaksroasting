import React from 'react';
import PropTypes from 'prop-types';


function Coffee(props){
  return(
    <div>
      <h3>{props.name} - {props.tasting}</h3>
      <p><em>{props.price}</em></p>
      <hr/>
    </div>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  tasting: PropTypes.string.isRequired,
  price: PropTypes.string
};

export default Coffee;
