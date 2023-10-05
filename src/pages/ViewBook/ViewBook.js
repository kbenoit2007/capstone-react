import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios'

import {useParams, Link} from 'react-router-dom'
import './ViewBook.scss'
import GetBook from '../../components/GetBook/GetBook';

function ViewBook() {
    const [images,SetImages]=useState("")
    const {userId, bookId} = useParams()


    //Write function to get images from a book

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/${userId}/viewbook/${bookId}/images`).then((data)=>{
          //  console.log(data)
             SetImages(data.data)
           // console.log(JSON.stringify(data.data[0].id))
        
         //  navigate('/warehouses');
         })

    },[userId,bookId])


   
  return (
    <div className="mainApp__container">
   
    {images && (
    <div>
         <h1><GetBook book={bookId}/></h1>
        {images.map((image) => (
          <div>
            <img src={image.url} className="viewBook__images" />
          </div>
        ))}
        </div>
        )}
    </div>
  )
}

export default ViewBook;