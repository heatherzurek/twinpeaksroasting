import React from 'react';
import PropTypes from 'prop-types';


function Coffee(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <h3>{props.tasting}</h3>
      <p>{props.origins}</p>
      <p><em>{props.price}</em></p>
      <p>***</p>
    </div>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  tasting: PropTypes.string.isRequired,
  origins: PropTypes.string.isRequired,
  price: PropTypes.string
};

export default Coffee;
