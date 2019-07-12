import React from 'react';
import PropTypes from 'prop-types';

function Coffee(props){
  return(
    <div>
      <style jsx>{`
        h2 {
          text-transform: uppercase;
          background-color: #af4900;
          color: white;
        }
        h3 {
          color: #717171;
        }
        p {
          color: #717171;
        }
        `}</style>
      <h2>{props.name}</h2>
      <h3>{props.tasting}</h3>
      <p>{props.origins}</p>
      <p><em>{props.price}</em></p>
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
