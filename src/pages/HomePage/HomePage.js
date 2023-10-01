import React from 'react';
import './HomePage.scss'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div class="header">
      <h1>HomePage</h1>
      <Link to={"/login"}>
      <h1>Login Page</h1>
      </Link>
      
      <></>
    </div>
  );
}

export default HomePage;