import React from 'react'
import './HowItWorksCard.scss'



function HowItWorksCard({header,image,text}){
    return (
      <>
        <div className="howItWorksCard__container">
          <div className="howItWorksCard__header">{header}</div>
          <div className="howItWorksCard__imageContainer"><img src={image} alt="howitworks-icon" className="howItWorksCard__image"></img></div>
          <div className="howItWorksCard__text">{text}</div>
        </div>
      </>
    );
}

export default HowItWorksCard