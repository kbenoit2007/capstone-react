import React, { useState, useEffect } from "react";
import './BookCoverPage.scss'

function BookCoverPage({ text, img, selectImage, className,hightDiv }) {
    const [selectedImage, setSelectedImage] = useState(false)

    const sendToSelectCoverPage = ()=>{
        const path = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_CURRENTPORT}`+img
        selectImage(path)
        if(selectedImage === true){
            setSelectedImage(false)
        }else{
            setSelectedImage(true)
        }
      
    }



  return (
    <div className={`bookCover__container--${selectedImage === true ? 'selected' : ''}`}  onClick={sendToSelectCoverPage}>
      <img src={img} className="bookCover__image" />
    </div>
  );
}

export default BookCoverPage;