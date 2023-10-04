import React from 'react'
import './LoginRegister.scss'
import loginBackground from '../../assets/image-login-modal.jpg'


function LoginRegister(){
  return (
    <div className="top">
    <div className="input__main">
      <div className="input__leftSide">
        <img src={loginBackground} className="input__image"/>

      </div>
      <div className="input__rightSide">
        <div className="input__rightSideContainer">
        <h2>Sign In</h2>
        <div className="input__textContainer">
          <input
            className="input__username"
            placeholder="Enter Username"
            type="text"
          />
          <input
            className="input__password"
            placeholder="Enter Password"
            type="password"
          />
          <button type="Submit">Submit </button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginRegister