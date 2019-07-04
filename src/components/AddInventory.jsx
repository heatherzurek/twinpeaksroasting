import React from 'react';

function AddInventory(){

  return (
    <div>
      <h2>Add Inventory:</h2>
      <style jsx>{`
        div {
          border: 1px solid black;
          border-radius: 5px;
          padding: 5px;
          margin: 0 auto;
          text-align: center;
          width: 500px;
        }
        button {
          background-color: #5e7761;
          border: 1px solid black;
        }
        `}</style>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Coffee Name'/>

        <input
          type='text'
          id='tasting'
          placeholder='Tasting Notes'/>

        <input
          type='text'
          id='origins'
          placeholder='Origins'/>

        <input
          id='price'
          placeholder='Price'/>
        <button type='submit'>Add</button>

      </form>
    </div>
  );
}

export default AddInventory;
