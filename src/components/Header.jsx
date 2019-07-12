import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Twin Peaks Coffee Roasters</h1>
      <h3><em>A damn fine cup of coffee</em></h3>

      <p>Welcome to Twin Peaks Coffee roasters, where you'll get a damn fine cup of coffee every visit. Please enjoy our rotating list of beans.</p>
      <Link to="/">Home</Link> | <Link to="/addinventory">Add Inventory</Link>
    </div>
  );
}

export default Header;
