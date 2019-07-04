import React from 'react';

function Welcome(){
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
      <p>Welcome to Twin Peaks coffee roasters, where you'll get a damn fine cup of coffee every time.</p>
    </div>
  );
}

export default Welcome;
