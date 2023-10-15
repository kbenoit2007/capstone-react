import React from "react";
import "./LoginRegister.scss";
import loginBackground from "../../assets/image-login-modal.jpg";
import TextInput from "../TextInput/TextInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";
import axios from "axios";

function LoginRegister() {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerPageVisible, setRegisterPageVisible] = useState(false);
  const [nameRegister, setNameRegister] = useState("");
  const [userNameRegister, setUserNameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/register") {
      console.log("using location " + location.pathname);
      setRegisterPageVisible(true);
    } else {
      setRegisterPageVisible(false);
    }
  }, []);

  axios.defaults.withCredentials = true;
  async function handleLogin(event) {
    event.preventDefault();

    if (!event.target[0].value) {
      document.getElementById("loginUserName").classList.add("inputError");
    } else {
      document.getElementById("loginUserName").classList.remove("inputError");
    }
    if (!event.target[1].value) {
      document.getElementById("loginPassword").classList.add("inputError");
    } else {
      document.getElementById("loginPassword").classList.remove("inputError");
    }

    if (loginUserName === "" || loginPassword === "") {
    } else {
      const userObject = {
        username: loginUserName,
        password: loginPassword,
      };

      try {
        await axios
          .post(
            `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user`,
            userObject
          )
          .then((data) => {
            console.log(data.status);
            console.log(
              JSON.stringify(data.data[0].birthdate),
              JSON.stringify(data.data[0].babyname),
              JSON.stringify(data.data[0].event)
            );
            if (
              data.status === 200 &&
              data.data[0].event !== null &&
              data.data[0].babyname !== null &&
              data.data[0].birthdate !== null
            ) {
              navigate(`../user/${data.data[0].id}`);
              window.location.reload(true);
            } else if (
              data.status === 200 &&
              data.data[0].event === null &&
              data.data[0].babyname === null &&
              data.data[0].birthdate === null
            ) {
              navigate(`../user/${data.data[0].id}/new`);
              window.location.reload(true);
            }
          });
      } catch (err) {
        alert("user not found");
        console.error("User Not Found");
      }
    }
  }

  function handleUserName(newText) {
    setLoginUserName(newText);
  }
  function handlePassword(newText) {
    setLoginPassword(newText);
  }

  // Register Logic
  function handleName(newText) {
    setNameRegister(newText);
  }
  function handleRegisterUserName(newText) {
    setUserNameRegister(newText);
  }

  function handleRegisterPassword(newText) {
    setPasswordRegister(newText);
  }

  async function handleRegister(event) {
    event.preventDefault();

    if (!event.target[0].value) {
      document.getElementById("registerName").classList.add("inputError");
    } else {
      document.getElementById("registerName").classList.remove("inputError");
    }
    if (!event.target[1].value) {
      document.getElementById("registerUserName").classList.add("inputError");
    } else {
      document
        .getElementById("registerUserName")
        .classList.remove("inputError");
    }
    if (!event.target[2].value) {
      document.getElementById("registerPassword").classList.add("inputError");
    } else {
      document
        .getElementById("registerPassword")
        .classList.remove("inputError");
    }

    if (
      nameRegister === "" ||
      userNameRegister === "" ||
      passwordRegister === ""
    ) {
    } else {
      const userObject = {
        name: nameRegister,
        username: userNameRegister,
        password: passwordRegister,
      };

      try {
        await axios
          .post(
            `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/register`,
            userObject
          )
          .then((data) => {
            if (data.statusText == "Created") {
              navigate(`/login`);
            }
          });
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div className="top">
      <div className="input__main">
        <div className="input__leftSide">
          <img src={loginBackground} className="input__image" />
        </div>
        <div className="input__rightSide">
          <div className="input__rightSideContainer">
            {registerPageVisible ? (
              <>
                {" "}
                <div className="input__header">Register</div>
                <div className="input__textContainer">
                  <form onSubmit={handleRegister}>
                    <TextInput
                      id="registerName"
                      className="input__name textInputStyle"
                      placeholder="Enter Name"
                      type="text"
                      onTextChange={handleName}
                    />
                    <TextInput
                      id="registerUserName"
                      className="input__username textInputStyle"
                      placeholder="Enter Username"
                      type="text"
                      onTextChange={handleRegisterUserName}
                    />
                    <TextInput
                      id="registerPassword"
                      className="input__password textInputStyle"
                      placeholder="Enter Password"
                      type="password"
                      onTextChange={handleRegisterPassword}
                    />
                    <div className="input__submitButton">
                      <SubmitButton />
                    </div>
                  </form>
                  <div className="input__subtext">
                    Already Registered? <Link to="../login">Login Here</Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="input__header">Sign In</div>
                <div className="input__textContainer">
                  <form onSubmit={handleLogin}>
                    <TextInput
                      id="loginUserName"
                      className="input__username textInputStyle"
                      placeholder="Enter Username"
                      type="text"
                      onTextChange={handleUserName}
                    />
                    <TextInput
                      id="loginPassword"
                      className="input__password textInputStyle"
                      placeholder="Enter Password"
                      type="password"
                      onTextChange={handlePassword}
                    />
                    <div className="input__submitButton">
                      <SubmitButton />
                    </div>
                  </form>
                  <div className="input__subtext">
                    Do you have an account?{" "}
                    <Link to="../register">Register Here</Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
