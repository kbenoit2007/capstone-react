import React from "react";
import "./GetBook.scss";
import {useState,useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'


function GetBook(props){ 

    const [bookData,SetBookData] = useState("")
    const {userId, bookId} = useParams()
   // console.log(userId,bookId)

    //Write function to get images from a book

    useEffect(()=>{
        axios.get(`http://localhost:3001/user/${userId}/viewbook/${props.book}`).then((data)=>{
             SetBookData(data)
         })

    },[])
 //   console.log(bookData.data[0].name)


  return (
    <>
  {bookData.data && (
    <div>
        {bookData.data.map((book) => (
          <div>
            {book.name}
          </div>
        ))}
        </div>
        )}
    
    </>
  )
}


export default GetBook;
