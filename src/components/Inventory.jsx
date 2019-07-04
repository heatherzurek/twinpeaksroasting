import React from 'react';
import Coffee from './Coffee';

var masterInventory = [
  {
    name: 'Cherry Pie',
    tasting: 'Dark Chocolate and Cherry.',
    price: '$15.99'
  },
  {
    name: 'Fire Walk',
    tasting: 'Hazelnut, Toasted Marshmallow, Hint of Navel Orange.',
    price: '$15.99'
  },
  {
    name: 'Log Lady',
    tasting: 'Bakers Chocolate, Walnut, Sweet Tobacco, Cinnamon.',
    price: '$14.99'
  },
  {
    name: 'Owls',
    tasting: 'Oak, Red Wine, and Black Currant.',
    price: '$15.99'
  }
];

export default function Inventory(){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #8e9a7c;
            border: 1px solid black;
            border-radius: 5px;
            padding: 5px;
            margin: 0 auto;
            text-align: center;
            width: 500px;
          }
          `}</style>
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
