/** @format */

import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <>
    <div className="body">
      <div className='mainlogin'>
        <input type='checkbox' id='chk' aria-hidden='true' />

        <div className='signup'>
          <form>
            <label for='chk' aria-hidden='true'>
              Sign up
            </label>
            <input type='text' name='txt' placeholder='User name' required='' />
            <input type='email' name='email' placeholder='Email' required='' />
            <input
              type='password'
              name='pswd'
              placeholder='Password'
              required=''
            />
            <button className="btnlogin">Sign up</button>
          </form>
        </div>

        <div className='login'>
          <form>
            <label for='chk' aria-hidden='true'>
              Login
            </label>
            <input type='email' name='email' placeholder='Email' required='' />
            <input
              type='password'
              name='pswd'
              placeholder='Password'
              required=''
            />
            <button className="btnlogin">Login</button>
          </form>
        </div>
      </div></div>
    </>
  );
};

export default Login;
