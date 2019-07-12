import React from 'react';
import PropTypes from 'prop-types';

export default function AddInventory(props){
  let _name = null;
  let _tasting = null;
  let _origins = null;
  let _price = null;

  function handleSubmission(event) {
    event.preventDefault();
    props.onNewInventoryCreation({name: _name.value, tasting: _tasting.value, origins: _origins.value, price: _price.value})
    _name.value = '';
    _tasting.value = '';
    _origins.value = '';
    _price.value = '';
  }

  return (
    <div>
      <h2>Add Inventory:</h2>
      <style jsx>{`
        div {
          padding: 5px;
        }
        button {
        }
        `}</style>
      <form onSubmit={handleSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Coffee Name'
          ref={(input) => {_name = input;}}/>

        <input
          type='text'
          id='tasting'
          placeholder='Tasting Notes'
          ref={(input) => {_tasting = input;}}/>

        <input
          type='text'
          id='origins'
          placeholder='Origins'
          ref={(input) => {_origins = input;}}/>

        <input
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <button type='submit'>Add</button>

      </form>
    </div>
  );
}

AddInventory.propTypes = {
  onNewInventoryCreation: PropTypes.func
};
