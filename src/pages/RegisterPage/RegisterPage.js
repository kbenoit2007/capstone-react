import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'
import LoginRegister from '../../components/LoginRegister/LoginRegister';


function RegisterPage() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

 
    


  return (
    <div>
      <LoginRegister />
    </div>
  );
}

export default RegisterPage;