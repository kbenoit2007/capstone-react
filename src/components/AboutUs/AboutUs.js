import React from "react";
import './AboutUs.scss'


function AboutUs(){
    return (
      <div className="aboutUs__container">
        <div className="aboutUs__header">About Us</div>
        <div className="aboutUs__textContainer">
        <p className="aboutUs__text">
          Welcome to Moments where we are passionate about preserving your
          precious moments and turning them into beautiful photobooks. Our team
          of dedicated professioals work together to create stunning photobooks
          that you'll treasure for a lifetime.
        </p>
        <p className="aboutUs__text">
          We believe that every picture has a story to tell. Whether it's
          capturing the joy of a wedding, the innocence of a newborn, or the
          adventures of a family vacation, we're here to help you tell your
          story through our photobooks.
        </p>

        </div>


      </div>
    );
}

export default AboutUs