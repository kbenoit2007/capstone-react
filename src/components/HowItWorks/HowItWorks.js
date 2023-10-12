import React from "react";
import './HowItWorks.scss'
import HowItWorksCard from "../HowItWorksCard/HowItWorksCard";
import uploadImage from '../../assets/howitworks/icons8-upload-to-cloud-100.png'
import customizeImage from '../../assets/howitworks/icons8-customize-100.png'
import shareImage from '../../assets/howitworks/icons8-share.svg'

function HowItWorks(){
    return(
    <div className="howItWorks__container">
        <div className="howItWorks__header">How It Works</div>
    
    <div className="howItWorks__cardContainer">
    <HowItWorksCard header="1" image={uploadImage} text="Upload"/>
    <HowItWorksCard header="2" image={customizeImage} text="Customize"/>
    <HowItWorksCard header="3" image={shareImage} text="Share"/>

    </div>


    
    </div>
    )
}

export default HowItWorks