import React,{useState} from 'react'
import TimeStampToDate from '../TimeStampToDate/TimeStampToDate'
import {useParams, Link, useNavigate} from 'react-router-dom'
import './TellUsMore.scss'
import Questions from '../Questions/Questions'


function TellUsMore({newBornData}){
    // console.log("tell us more birthdat is "+newBornData.birthdate)
    const [dataToExport,setDataToExport] = useState('')

    const navigate = useNavigate()
    const {userId} = useParams()

     const handleSubmit=()=>{
        console.log("send data for questionaire " +dataToExport)
       
        navigate(`/user/${userId}`)
        // console.log("test") 
     }

    const handleQuestionsData=(data)=>{
          setDataToExport(data)
     }
    return (
      <>
        {/* {newBornData.babyname} */}
        <div className="tellUsMore__container">
          <div className="tellUsMore__header">Tell Us More</div>
          <Questions name={newBornData.babyname}  questionsData ={handleQuestionsData}        />

          {/* {newBornData.user_id} */}
          <TimeStampToDate timeStamp={newBornData.birthdate} />
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </>
    );
}

export default TellUsMore