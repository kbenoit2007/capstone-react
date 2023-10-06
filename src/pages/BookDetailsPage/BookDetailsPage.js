import React from 'react'
import './BookDetailsPage.scss'
import axios from "axios"
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {useParams, Link} from 'react-router-dom'




function BookDetails({selectCoverPageData,onSelectClickNext}){
    const [bookName, setBookName] = useState("")
    const [bookDesc, setBookDesc] = useState("")
    const [bookDetailsData, setBookDetailsDate] = useState('')
    
   

    console.log("reading functon from coverpage "+selectCoverPageData)
   // console.log("received data "+passedData)
   const {userId} = useParams()

   async function handleSubmit(event){
    event.preventDefault()
    console.log("the user id is "+userId)
    console.log("the new uuid is "+uuidv4())
    const bookObject ={
        id: uuidv4(),
        name:bookName,
        description:bookDesc,
        user_id:userId,
        cover_pic:selectCoverPageData
    }
    try{
        await axios.post(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/books`, bookObject).then((data)=>{
          console.log(data)
          console.log(JSON.stringify(data.data[0].id))
        //    const newArray = [selectCoverPageData, bookObject]
        //    console.log("data to be passed along "+newArray)
          // setBookDetailsDate(newArray)
           onSelectClickNext('ImageUpload',bookObject)


        })
     } catch(err){
       console.error(err)
     }

   }

   const handleNextClick = ()=>{
    // console.log("after next "+selectedImage)
    
    // navigate('BookDetailsPage')
    
    // return selectedImage
}

    return(<div className="mainApp__container">
        <div className="bookDetails__container">

        
        <div className="bookDetails__leftContainer">
            <div>
                <img src={selectCoverPageData} className="bookDetails__bookCoverImage"/>
            </div>

        </div>
        <div className="bookDetails__rightContainer">
            <div className="bookDetails__inputContainer">
            <form onSubmit={handleSubmit}>
        <label>Book Name</label>
        <input type="text" onChange={(e)=>{
            setBookName(e.target.value)
        }}
        />
        <label>Book Description</label>
        <input type="text" onChange={(e)=>{
            setBookDesc(e.target.value)
        }}
        />
        <button type="Submit">Submit </button>
      </form>
            </div>

</div>
    </div>
    <button type="submit" onClick={handleNextClick}>Next</button>
    </div>
    
    )
}

export default BookDetails