import React,{useState,useEffect} from 'react'

function TimeStampToDate({timeStamp}){
    const [newDate,setNewDate] = useState('')


    const timeStamConverter = (timeStamp) => {
        const date = new Date(timeStamp);
        setNewDate(date.toLocaleString('en-US', {  dateStyle: 'long'})  )
        return newDate
      };

      useEffect(()=>{
        timeStamConverter(timeStamp)

    },[])

     




    return(<>{newDate}</>)
}
export default TimeStampToDate