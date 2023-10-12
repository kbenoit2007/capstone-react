import React,{useRef} from 'react';
import './HomePage.scss'
import { Link } from "react-router-dom";
import hero from '../../assets/heropics/60393689-4537-42e7-aa1e-7fa9915381f6-1922-000002e4571f1f7e.jpeg'
import hero2 from '../../assets/heropics/Screenshot 2023-10-10 at 19.17.31.png'
import Header from '../../components/Header/Header';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import AboutUs from '../../components/AboutUs/AboutUs';

function HomePage() {
  const scrollTargetRef = useRef(null);
  // const scrollTargetRefAboutUs = useRef(null);

  const scrollToTarget = () => {
    console.log("scrolled to how it works...")
    scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAboutUs = () => {
    console.log("scrolled to about us...")
    // scrollTargetRefAboutUs.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // <div className="mainApp__container">
    <>
    
    <div class="homePage__hero">
      <Header scrollToTarget={scrollToTarget}/>
      <div className="homePage__textContainer"></div>
      <h1 className="homePage__title">Create Memories</h1>
      <h1 className="homePage__subTitle">Capture the Moments</h1>
      <img src={hero2} width='100%'></img>
    </div>
    <div ref={scrollTargetRef} >
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