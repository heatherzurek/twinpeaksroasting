import React from 'react';
import Coffee from './Coffee';

var masterInventory = [
  {
    name: 'Cherry Pie',
    tasting: 'Dark Chocolate and Cherry.',
    price: '15.99'
  },
  {
    name: 'Fire Walk',
    tasting: 'Hazelnut, Toasted Marshmallow, Hint of Navel Orange.',
    price: '15.99'
  },
  {
    name: 'Log Lady',
    tasting: 'Bakers Chocolate, Walnut, Sweet Tobacco, Cinnamon.',
    price: '14.99'
  }
];

export default function Inventory(){
  return (
    <div>
      <hr/>
      {masterInventory.map((coffee, index) =>
        <Coffee name={coffee.name}
          tasting={coffee.tasting}
          price={coffee.price}
          key={index} />
      )}
    </div>
  );
}
