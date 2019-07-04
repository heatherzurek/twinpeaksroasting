import React from 'react';
// import { Link } from 'react-router-dom';

function Header(){
  return (
  <div>
    <style jsx>{`
        div {
          border: 1px solid black;
          border-radius: 5px;
          padding: 5px;
          margin: 0 auto;
          text-align: center;
          width: 500px;
        }
        `}</style>
      <h1>Twin Peaks Coffee Roasters</h1>
      <h3><em>A damn fine cup of coffee</em></h3>
    </div>
  );
}

export default Header;
