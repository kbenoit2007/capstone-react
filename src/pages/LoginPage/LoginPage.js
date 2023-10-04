import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react"
import axios from 'axios'
import LoginRegister from '../../components/LoginRegister/LoginRegister';
import './LoginPage.scss'




function LoginPage() {
  return (
    <div className="mainApp__container">
      <LoginRegister />
    </div>
  );
}

export default LoginPage;