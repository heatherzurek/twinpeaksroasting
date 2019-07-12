import React from 'react';
import PropTypes from 'prop-types';

export default function AdminLogin(props){
  return(
    <div>
      <h3>Admin Login</h3>
      <form>
        <label>
          <input type="text" name="name" placeholder="username" />
        </label>
        <label>
          <input type="text" name="name" placeholder="password" />
        </label>
        <button onClick={props.onAdminConfirm}>Login</button>
     </form>
    </div>
  );
}

AdminLogin.propTypes = {
  onAdminConfirm: PropTypes.func
};
