import React from 'react';
import coffee from './../assets/images/coffee.jpeg';
import { Link } from 'react-router-dom';


const backgroundImage = {
  backgroundImage: `url(${coffee})`,
  height: '670px',
  backgroundPosition: 'center',
};

export default function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          font-family: sans-serif;
          text-align: center;
        }
        .headerText {
          color: #000000;
          width: 300px;
          height: 650px;
          background-color: #efefef96;
          padding: 10px;
        }
        h1 {
          margin-top: 150px;
        }
        a {
          color: #FFFFFF!important;
        }
        `}</style>
      <div style = {backgroundImage}>
      <div className="headerText">
	      <h1>Twin Peaks Coffee Roasters</h1>
        <h3><em>A damn fine cup of coffee</em></h3>

      <p>Welcome to Twin Peaks Coffee roasters, where you'll get a damn fine cup of coffee every visit. Please enjoy our rotating list of beans.</p>
      <Link className="linkColor" to="/">Home</Link> | <Link to="/addinventory">Add Inventory</Link>

      </div>
    </div>
  </div>
  );
}
