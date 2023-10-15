import React,{useState} from "react";
import axios from 'axios'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './NewBorn.scss'



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
   
   <div className="newBornPage__container">
    <div className="newBornPage__header">Baby Details</div>

    <form onSubmit={handleSubmit}>
   <div className="newBornPage__inputContainer">
   <div>
    <label className="newBornPage__labels" htmlFor="BabyName">{`Name`}</label>   
    <input  type="text" id="BabyName" placeholder="Enter Your Baby's Name" className="newBornPage__name textInputStyle" onChange={(e) => setBabyName(e.target.value)}></input>
    </div>

    <div>
    <label className="newBornPage__labels" htmlFor="Birthday">BirthDay</label> 
    <DatePicker id="Birthday" selected={birthDate} dateFormat="MMMM dd, yyyy" className="newBornPage__date textInputStyle" onChange={handleDateChange} />
    </div>
    <button className="newBornPage__submitButton rounded-button" type="Submit" >Submit</button>
    
    </div>
    </form>
    </div>
    </>)
}

export default NewBorn