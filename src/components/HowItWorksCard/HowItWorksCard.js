import React from 'react'
import './HowItWorksCard.scss'



function HowItWorksCard({header,image,text}){
    return (
      <>
        <div className="howItWorksCard__container">
          <div className="howItWorksCard__header">{header}</div>
          <div className="howItWorksCard__image"><img src={image} alt="howitworks-icon"></img></div>
          <div className="howItWorksCard__text">{text}</div>
        </div>
      </>
    );
}

export default HowItWorksCard