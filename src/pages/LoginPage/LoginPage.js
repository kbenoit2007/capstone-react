import React from 'react';
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Welcome User</p>
      <Link to="/user/777">
        <h1>The Profile is here</h1>
      
      </Link>
    </div>
  );
}

export default LoginPage;