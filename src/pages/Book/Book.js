import React from 'react';
import {useState} from 'react'
import axios from 'axios'
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import {useParams, Link} from 'react-router-dom'

function Book() {

  const [bookName,setBookName]= useState("")
  const [bookDesc,setBookDesc]= useState("")

  const {userId, bookId} = useParams()
  console.log("The Params userid "+userId)
  console.log("The Params bookid "+bookId)


  
  async function handleSubmit(event){
    event.preventDefault()
  //  console.log(event)
 //   console.log(loginUserName)
    const bookObject ={
        id: bookId,
        name:bookName,
        description:bookDesc,
        user_id:userId
    } 

    console.log(bookObject)

    try{
        await axios.post(`http://localhost:3001/books`, bookObject).then((data)=>{
          // console.log(data)
          // console.log(JSON.stringify(data.data[0].id))
       
        //  navigate('/warehouses');
        })
     } catch(err){
       console.error(err)
     }
    }
  return (
    <div>
      <h1>Your Book</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" onChange={(e)=>{
            setBookName(e.target.value)
        }}
        />
        <label>Description</label>
        <input type="text" onChange={(e)=>{
            setBookDesc(e.target.value)
        }}
        />
        <button type="Submit">Submit </button>
      </form>

      {/* <Book /> */}
      <ImageUpload bookId={bookId}/>
      {/* <ImageUpload userId={userId}/> */}

    </div>
  );
}

export default Book;