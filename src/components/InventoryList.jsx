import React from 'react';
import Coffee from './Coffee';

export default function InventoryList(){
  return (
    <div>
      <hr/>
      {masterInventoryList.map((coffee, index) =>
        <Coffee name={coffee.name}
          tasting={coffee.tasting}
          origins={coffee.origins}
          price={coffee.price}
          key={index} />
      )}
    </div>
  );
}
