import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import baby1 from '../../assets/eventpics/baby1.png'
import marriage2 from '../../assets/eventpics/marriage2.png'

import './SelectEvent.scss'

function SelectEvent({onNextClick}){
    const {userId} = useParams()
  //  const [firstStepData1,setFirstStepData1] = useState()
    const [firstStepStatus,setFirstStepStatus] = useState('')
    const [event,setEvent]=useState('')

    const handleSubmitEvent =(e)=>{
        e.preventDefault()
        const eventObject={
           user_id:userId, 
           event:event
        }
        axios.post(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/new`, eventObject)
        .then(res => {
           console.log(res)
           console.log("the event object is "+JSON.stringify(eventObject))
        //   setFirstStepData1([eventObject])
           setFirstStepStatus(true)
            const data = {...eventObject}
           onNextClick('NewBorn',data)
        })
    }

    return (
      <>
        <div className="selectEvent__container">
          <div className="selectEvent__header">Choose Your Event </div>
          <div>
            <form onSubmit={handleSubmitEvent}>
              <div className="selectEvent__chooseContainer">
                <div className="selectEvent__event">
                <label className="selectEvent__event--newBornLabel" htmlFor="newBornChoice" >
                  <input
                    type="radio"
                    id="newBornChoice"
                    name="eventChoice"
                    value="New Born"
                    className="selectEvent__input"
                    onChange={(e) => setEvent(e.target.value)}
                    checked={event === "New Born"} 
                  />
                  <div className="selectEvent__event--radioButton">
                  <img src={baby1} className="selectEvent__event--image" />
                  <p>New Born</p>
                  </div>
                  </label>
                </div>
                <div>
                <label className="selectEvent__event--marriageLabel" htmlFor="marriageChoice">
                  <input
                    type="radio"
                    id="marriageChoice"
                    name="eventChoice"
                    className="selectEvent__input"
                    value="Marriage"
                    onChange={(e) => setEvent(e.target.value)}
                    checked={event === "Marriage"} 
                  />
                  <div className="selectEvent__event--radioButton">
                  <img src={marriage2} className="selectEvent__event--image" />
                  <p>Marriage</p>
                  </div>
                  
                  </label>
                </div>
              </div>
            
              <div className="selectEvent__button--submit"><button type="submit" >Submit</button></div>
            </form>
          </div>
         
          
        </div>
      </>
    );
}
export default SelectEvent