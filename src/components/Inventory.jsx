import React from 'react';
import Coffee from './Coffee';

var masterInventory = [
  {
    name: 'Cherry Pie',
    tasting: 'Dark Chocolate and Cherry.',
    origins: 'Central and South American',
    price: '$15.99'
  },
  {
    name: 'Fire Walk',
    tasting: 'Hazelnut, Toasted Marshmallow, Hint of Navel Orange.',
    origins: 'Central America, South America, and the Pacific Rim',
    price: '$15.99'
  },
  {
    name: 'Log Lady',
    tasting: 'Bakers Chocolate, Walnut, Sweet Tobacco, Cinnamon.',
    origins: 'Ecuador',
    price: '$14.99'
  },
  {
    name: 'Owls',
    tasting: 'Oak, Red Wine, and Black Currant.',
    origins: 'Central and South American',
    price: '$15.99'
  }
];

export default function Inventory(){
  return (
    <div>
      <style jsx>{`
          div {
            font-family: sans-serif;
            padding: 5px;
            margin: 0 auto;
            text-align: center;
            width: 500px;
          }
          `}</style>
      {masterInventory.map((coffee, index) =>
        <Coffee name={coffee.name}
          tasting={coffee.tasting}
          origins={coffee.origins}
          price={coffee.price}
          key={index} />
      )}
    </div>
  );
}
