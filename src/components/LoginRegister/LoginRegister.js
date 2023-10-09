import React from 'react'
import './LoginRegister.scss'
import loginBackground from '../../assets/image-login-modal.jpg'
import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import {useState, useEffect} from 'react'
import { Link, useNavigate, useParams,useHistory ,useLocation } from "react-router-dom";
import axios from 'axios'


function LoginRegister(){
    const [loginUserName,setLoginUserName] = useState("") 
    const [loginPassword,setLoginPassword] = useState("") 
    const [registerPageVisible, setRegisterPageVisible] = useState(false)
    const [nameRegister, setNameRegister] = useState("")
    const [userNameRegister, setUserNameRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")

    const navigate = useNavigate();
    
    // console.log("using Window "+window.location.href)
    const location = useLocation()
    // console.log("using location "+location.pathname)

    
    // const registerPresent = () => {
        useEffect(() => {
            if(location.pathname == "/register"){
                console.log("using location "+location.pathname)
                setRegisterPageVisible(true);
            }else{
                setRegisterPageVisible(false);
            }
        }, []); 

    
    //   };
    
    //   const handleLogout = () => {
    //     setIsLoggedIn(false);
    //   };
    

// const history = useHistory()
// console.log("using history "+ history.location.pathname)
    axios.defaults.withCredentials = true
    async function handleLogin(event){
        event.preventDefault()
        const userObject ={
            username:loginUserName,
            password:loginPassword
        } 
    
        console.log(userObject)
    
        try{
            await axios.post(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user`, userObject).then((data)=>{
              console.log(data)
              console.log(JSON.stringify(data.data[0].id))
              if(data.status === 200 ){
                navigate(`../user/${data.data[0].id}`);
                window.location.reload(true)
              }
            })
         } catch(err){
          alert("user not found")
           console.error("User Not Found")
         }
        }

    function handleUserName(newText){
        setLoginUserName(newText)
    }
    function handlePassword(newText){
        setLoginPassword(newText)
    }


    // Register Logic
    function handleName(newText){
      setNameRegister(newText)
    }
    function handleRegisterUserName(newText){
        setUserNameRegister(newText)
    }


    function handleRegisterPassword(newText){
        setPasswordRegister(newText)
    }

    async function handleRegister(event){
        event.preventDefault()
        const userObject ={
            name: nameRegister,
            username:userNameRegister,
            password:passwordRegister
        }

        try{
            await axios.post(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/register`, userObject).then((data)=>{
              if(data.statusText == "Created"){
                navigate(`/login`);
              }  
              
        
            })
         } catch(err){
           console.error(err)
         }
        }



  return (
    <div className="top">
    <div className="input__main">
      <div className="input__leftSide">
        <img src={loginBackground} className="input__image"/>
      </div>
      <div className="input__rightSide">
        <div className="input__rightSideContainer">
      {registerPageVisible ? (<> <h2>Register</h2>
        <div className="input__textContainer">
            <form onSubmit={handleRegister}>
            <TextInput className="input__name" placeholder="Enter Name" type="text" onTextChange={handleName}/>    
            <TextInput className="input__username" placeholder="Enter Username" type="text" onTextChange={handleRegisterUserName}/>
            <TextInput className="input__password" placeholder="Enter Password" type="password" onTextChange={handleRegisterPassword} />
            <SubmitButton />
            </form>
        </div></>):(<>        <h2>Sign In</h2>
        <div className="input__textContainer">
            <form onSubmit={handleLogin}>
            <TextInput className="input__username" placeholder="Enter Username" type="text" onTextChange={handleUserName}/>
            <TextInput className="input__password" placeholder="Enter Password" type="password" onTextChange={handlePassword} />
            <SubmitButton />
            </form>
            <div>Do you have an account? <Link to="../register" >Register Here</Link></div>
        </div></>)}

        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginRegister