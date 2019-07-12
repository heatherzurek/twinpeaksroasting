import React from 'react';
import trees from './../assets/images/treesbackground.jpeg';
import { Link } from 'react-router-dom';


const backgroundImage = {
  backgroundImage: `url(${trees})`,
  height: '550px'
};

export default function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          font-family: sans-serif;
          text-align: center;
          width: 100%;
          position: center;
        }
        .headerText {
          color: #FFFFFF;
          width: 300px;
          height: 530px;
          background-color: #0000008f;
          padding: 10px;
        }
        `}</style>
      <div style = {backgroundImage}>
      <div className="headerText">
	      <h1>Twin Peaks Coffee Roasters</h1>
        <h3><em>A damn fine cup of coffee</em></h3>

      <p>Welcome to Twin Peaks Coffee roasters, where you'll get a damn fine cup of coffee every visit. Please enjoy our rotating list of beans.</p>
      <Link to="/">Home</Link> | <Link to="/addinventory">Add Inventory</Link>

      </div>
    </div>
  </div>
  );
}
