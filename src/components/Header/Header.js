import React from "react";
import { useState, useEffect } from "react";
import {  Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Header.scss";
import headerLogo from "../../assets/logo/Logo.png";
import Cookies from "js-cookie";
import avatarImage from "../../assets/icons/avatar.png";
import logoutImage from "../../assets/icons/logout.png";
import howItWorksImage from "../../assets/icons/system.png";
import aboutUsImage from "../../assets/icons/info.png";

function Header({ scrollToTarget, scrollToAboutUs }) {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/verify`
      )
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
          setUserId(Cookies.get("userId"));
        } else {
          setAuth(false);
          setMessage(res.data.Message);
        }
      });
  }, []);

  const handleLogout = () => {
    axios
      .get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/logout`)
      .then((res) => {
        if (res.data.Status === "Success") {
          // window.reload(true)

          navigate("/");
          window.location.reload(true);
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const profileName = capitalizeFirstLetter(name);

  const relative = "relative";
  const isHomePage = window.location.pathname === "/";

  return (
    <>
      {isHomePage === true ? (
        <>
          {" "}
          <div className={`header`}>
            <div className="header__logoContainer">
              <a href="/">
                <img src={headerLogo} className="header__logo" alt="icon"/>
              </a>
            </div>
            <button className="header__buttons" onClick={scrollToTarget}>
              <img
                className="header__buttons--howItWorks"
                src={howItWorksImage}
                alt="icon"
              />
              How It Works
            </button>
            <button className="header__buttons" onClick={scrollToAboutUs}>
              <img className="header__buttons--aboutUs" src={aboutUsImage} alt="icon"/>
              About Us
            </button>
            {auth ? (
              <>
                <>
                  <button className="header__buttons">
                    <Link to={`/user/${userId}`}>
                      <img
                        className="header__buttons--profile"
                        src={avatarImage}
                        alt="icon"
                      />
                      {profileName}
                    </Link>
                  </button>
                </>
                <button className="header__buttons" onClick={handleLogout}>
                  <img className="header__buttons--logout" src={logoutImage} alt="icon"/>
                  Logout
                </button>
              </>
            ) : (
              <>
                <div>
                  <Link to={"/login"}>
                    <button className="header__buttons">Login/Register</button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={`header ${relative}`}>
            <div className="header__logoContainer">
              <a href="/">
                <img src={headerLogo} className="header__logo" alt="icon" />
              </a>
            </div>
            <div onClick={scrollToTarget}></div>
            <div onClick={scrollToAboutUs}></div>
            {auth ? (
              <>
                <>
                  <Link to={`/user/${userId}`}>{profileName}</Link>
                </>
                <div onClick={handleLogout}>Logout</div>
              </>
            ) : (
              <>
                <div>
                  <Link to={"/login"}>Login/Register</Link>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Header;
