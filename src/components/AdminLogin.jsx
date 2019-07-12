import React from 'react';
import PropTypes from 'prop-types';

export default function AdminLogin(props){
  return(
    <div>
      <style jsx>{`
          div {
            font-family: sans-serif;
            margin: -350px;
            padding: 15px;

          }
          .login {
            margin: 0 auto;
            display: block;
            text-align: center;
            background-color: #efefef96;
            width: 350px;
            height: 90px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            }
        `}</style>
      <div className="login">
      <h3>Admin Login</h3>
      <form>
        <label>
          <input type="email" name="name" placeholder="username@email.com" />
        </label>
        <label>
          <input type="text" name="name" placeholder="password" />
        </label>
        <button onClick={props.onAdminConfirm}>Login</button>
     </form>
   </div>
    </div>
  );
}

AdminLogin.propTypes = {
  onAdminConfirm: PropTypes.func
};
