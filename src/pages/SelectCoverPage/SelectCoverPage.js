import React, { useState, useEffect } from "react";
import './SelectCoverPage.scss'
import BookCoverPage from "../../components/BookCoverPage/BookCoverPage";
import babyraccon from '../../assets/bookcovers/baby-racoon.jpeg'
import daisySummer from '../../assets/bookcovers/daisy-summer.jpg'
import paperSwan from '../../assets/bookcovers/Adobe3-1682786385.jpeg'
import lotusFlower from '../../assets/bookcovers/lotus-flower-4k-9p.jpg'
import colorSpalsh from '../../assets/bookcovers/color-splash.jpeg'
import cartoonAnimals from '../../assets/bookcovers/cartoonAnimals.jpg'
import BookDetailsPage from "../BookDetailsPage/BookDetailsPage";



function SelectCoverPage({onNextClick}){
    const defaultImage = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_CURRENTPORT}`+babyraccon
    const [selectedImage, setSelectedImage] = useState(defaultImage)
    const [nextButtonData, setNextButtonData] = useState()
    
    const handleSelectedImage = (image)=>{
        setSelectedImage(image)
        console.log("is selected "+selectedImage)
    }

    const handleNextClick = ()=>{
        // console.log("after next "+selectedImage)
        onNextClick('BookDetailsPage',selectedImage)
        // navigate('BookDetailsPage')
        
        // return selectedImage
    }

  return(
    <div className="mainApp__container">
        Select Cover Page
        <div className="selectCoverPage__container">
        <BookCoverPage text="Test 1" img={babyraccon} selectImage={handleSelectedImage} />
        <BookCoverPage text="Test 2" img={daisySummer} selectImage={handleSelectedImage}/>
        <BookCoverPage text="Test 3" img={paperSwan} selectImage={handleSelectedImage}/>
        <BookCoverPage text="Test 4" img={lotusFlower} selectImage={handleSelectedImage}/>
        <BookCoverPage text="Test 5" img={colorSpalsh} selectImage={handleSelectedImage}/>
        <BookCoverPage text="Test 6" img={cartoonAnimals} selectImage={handleSelectedImage}/> 
       
        </div>
        <button type="submit" onClick={handleNextClick}>Next</button>
        </div>
  )
}

export default SelectCoverPage