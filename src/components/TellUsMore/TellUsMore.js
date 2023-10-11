import React from 'react'
import TimeStampToDate from '../TimeStampToDate/TimeStampToDate'
import {useParams, Link, useNavigate} from 'react-router-dom'


function TellUsMore({newBornData}){
    // console.log("tell us more birthdat is "+newBornData.birthdate)

    const navigate = useNavigate()
    const {userId} = useParams()

     const handleSubmit=()=>{
       
        navigate(`/user/${userId}`)
        console.log("test")
        
     }
    return(<>
    {/* {newBornData.babyname} */}
    Tell Us More Page About
    <div>{newBornData.babyname}</div>

    {/* {newBornData.user_id} */}
    <TimeStampToDate timeStamp={newBornData.birthdate} />
    <div><button onClick={handleSubmit}>Submit</button></div>

    </>)
}

export default TellUsMore