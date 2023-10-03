import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios'
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import {useParams, Link} from 'react-router-dom'
import './ViewBook.scss'

function ViewBook() {
    const [images,SetImages]=useState("")
    const {userId, bookId} = useParams()

    //Write function to get images from a book

    useEffect(()=>{
        axios.get(`http://localhost:3001/user/${userId}/viewbook/${bookId}/images`).then((data)=>{
          //  console.log(data)
             SetImages(data.data)
           // console.log(JSON.stringify(data.data[0].id))
        
         //  navigate('/warehouses');
         })

    },[])


   
  return (
    <>
    <h1>View Book</h1>
    {images && (
    <div>
        {images.map((image) => (
          <div>
            <img src={image.url} className="viewBook__images" />
          </div>
        ))}
        </div>
        )}
    </>
  )
}

export default ViewBook;