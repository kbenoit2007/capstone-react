import React,{useState} from "react";
import axios from 'axios'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function NewBorn({selectEventData,newBornData }){
    const [babyName, setBabyName]=useState('')
    const [birthDate, setBirthDate]=useState('')
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimeStamp,setSelectedTimeStamp] = useState(null)

    // const [sendData,setSendData]=useState('')

    console.log("test "+selectEventData[1])
     
    const handleSubmit=(e)=>{
        e.preventDefault()
        // const eventObject={
        //    user_id:userId, 
        //    event:event
        // }
        const detailsObject={
            user_id:selectEventData[1],
            babyname:babyName,
            birthdate:selectedTimeStamp
        }
        axios.post(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/new/info`, detailsObject)
        .then(res => {
           console.log(res)
           console.log("the details object is "+JSON.stringify(detailsObject))
        //   setFirstStepData1([eventObject])
        //    setFirstStepStatus(true)
            const data = {...detailsObject}
           newBornData('TellUsMore',data)
        
    
        })

    }

    const handleDateChange = (date) => {
        setBirthDate(date);
        setSelectedTimeStamp(dateToTimestamp(date))
        // const theTimeStamp = dateToTimestamp(date)
        // console.log("the timestamp is "+theTimeStamp)
 
        // const datez = new Date(theTimeStamp);
        // console.log("the converted date from timestamp is "+datez.toLocaleString('en-US', {  dateStyle: 'long'}));
        
      };

      const dateToTimestamp = (date) => {
        return date.getTime();
      };

    return(<>
   
   
    <form onSubmit={handleSubmit}>
    <label htmlFor="BabyName">Name</label>   
    <input type="text" id="BabyName" className="newBorn__name" onChange={(e) => setBabyName(e.target.value)}></input>
    <label htmlFor="Birthday">BirthDay</label> 

    
    <DatePicker id="Birthday" selected={birthDate} dateFormat="MMMM dd, yyyy" className="newBorn__name" onChange={handleDateChange} />
    <button type="Submit" >Submit</button>
    </form>
    </>)
}

export default NewBorn