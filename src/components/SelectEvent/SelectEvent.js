import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

function SelectEvent({onNextClick}){
    const {userId} = useParams()
  //  const [firstStepData1,setFirstStepData1] = useState()
    const [firstStepStatus,setFirstStepStatus] = useState('')
    const [event,setEvent]=useState('')

    // const handleNextClick = ()=>{
    //     // console.log("after next "+selectedImage)
        
    //     // navigate('BookDetailsPage')
        
    //     // return selectedImage


    // }


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

    //  useEffect(()=>{
    //     // axios.get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/${userId}/viewbook/${props.book}`).then((data)=>{
    //     //      SetBookData(data)
    //     //  })
    //     console.log("useState data "+firstStepData1)

    // },[firstStepData1])

     



    return(<>
        <div className="newUser__container">
    Choose Your Event 
    <div className="newUser__chooseContainer">


    <form onSubmit={handleSubmitEvent}>
      <div>
        <input
          type="radio"
          id="newBornChoice"
          name="eventChoice"
          value="New Born"
          onChange={(e) => setEvent(e.target.value)}
          checked={event === "New Born"} // Add this line to set the checked state
        />
        <label htmlFor="newBornChoice">New Born</label>

        <input
          type="radio"
          id="marriageChoice"
          name="eventChoice"
          value="Marriage"
          onChange={(e) => setEvent(e.target.value)}
          checked={event === "Marriage"} // Add this line to set the checked state
        />
        <label htmlFor="marriageChoice">Marriage</label>
      </div>
      <div></div>
      <button type="submit">Submit</button>
    </form>
     </div>

    </div>

    </>)
}
export default SelectEvent