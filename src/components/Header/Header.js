import React from "react";
import {useState,useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import './Header.scss'
import headerLogo from '../../assets/logo/Logo.png'


function Header(props){ 
  return (
    <div className="header">
        <div className="header__logoContainer">
        <a href="/">
            <img src={headerLogo} className="header__logo"/>
            </a>
        </div>
        <div>How It Works</div>
        <div>FAQ</div>
        <div>About Us</div>
        <div>
            <Link to={"/login"}>
      Login Page
      </Link>
            </div>

    
{/* <Link to={"/"}>
    <div>Capstone</div>
    </Link> */}

    </div>
  )
}


export default Header;
