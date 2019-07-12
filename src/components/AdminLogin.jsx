import React from 'react';

export default function AdminLogin(){
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
        <button>Login</button>
{/*       <input type="submit" value="Submit" />
*/}      </form>
    </div>
  );
}
