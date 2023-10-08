import React from "react";
import {useState,useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Header.scss'
import headerLogo from '../../assets/logo/Logo.png'


function Header(props){ 
 

  const [auth,setAuth ]= useState(false)
  const [name,setName] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()




  axios.defaults.withCredentials = true
  useEffect(() =>{
    axios.get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/verify`)
    .then(res => {
       console.log(res)
        if(res.data.Status === "Success"){
            setAuth(true)
            setName(res.data.name)
        } else{
            setAuth(false)
            setMessage(res.data.Message)

        }
    })
   },[])

   const handleLogout =()=>{
    axios.get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/logout`).then(res =>{
      if(res.data.Status === "Success"){
  // window.reload(true)
  
      navigate('/')
      window.location.reload(true)
      } else{
          alert("error")
      }

  }).catch(err => console.log(err))
         
   }



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
        {
          auth?
          <>
          <>
          {name}
          </>
          <div onClick={handleLogout}>
            Logout
          </div>
          
          </>
          :
          <>
                  <div>
            <Link to={"/login"}>
      Login Page
      </Link>
            </div>

          </>
        }

    
{/* <Link to={"/"}>
    <div>Capstone</div>
    </Link> */}

    </div>
  )
}


export default Header;
