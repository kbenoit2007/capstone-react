import React, { useRef } from "react";
import "./HomePage.scss";
import hero2 from "../../assets/heropics/choosenHeroPic.png";
import Header from "../../components/Header/Header";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import AboutUs from "../../components/AboutUs/AboutUs";

function HomePage() {
  const scrollTargetRef = useRef(null);

  const scrollToTarget = () => {
    scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div class="homePage__hero">
        <Header scrollToTarget={scrollToTarget} />
        <div className="homePage__textContainer"></div>
        <h1 className="homePage__title">Create Memories</h1>
        <h1 className="homePage__subTitle">Capture the Moments</h1>
        <img src={hero2} width="100%" alt="hero"></img>
      </div>
      <div ref={scrollTargetRef}>
        <HowItWorks />
      </div>
      <div>
        <AboutUs />
      </div>
    </>
    // </div>
  );
}

export default HomePage;
