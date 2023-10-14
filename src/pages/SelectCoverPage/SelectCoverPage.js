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
    // const [selectedImage, setSelectedImage] = useState(defaultImage)
    const [nextButtonData, setNextButtonData] = useState()
    const [currentImage,setCurrentImage] = useState()
    
    const handleSelectedImage = (image)=>{
        setSelectedImage(image)
        console.log("is selected "+selectedImage)
    }

    // const handleNextClick = ()=>{
    //     // console.log("after next "+selectedImage)
    //     onNextClick('BookDetailsPage',selectedImage)
    //     // navigate('BookDetailsPage')
        
    //     // return selectedImage
    // }

    const handleSubmitEvent = ()=>{
      
    }

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
      babyraccon,
      daisySummer,
      paperSwan,
      lotusFlower,
      colorSpalsh,
      cartoonAnimals,
    ];
  
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    const handleSubmit = () => {
      if (selectedImage) {
        onNextClick('BookDetailsPage',selectedImage)
      } else {
        alert('Please select an image before submitting.');
      }
    };

  return(
      // <div className="selectCoverPage__container">

    
      // <div className="selectCoverPage__header">Select Cover Page</div>
      // <form onSubmit={handleSubmitEvent}>
      //   <div className="selectCoverPage__imgContainer">

      //   <label className="selectCoverPage__img1" htmlFor="newBornChoice" >
      //             <input
      //               type="radio"
      //               id="newBornChoice"
      //               name="eventChoice"
      //               value="babyracoon"
      //               className="selectEvent__input"
      //               onChange={(e) => setSelectedImage(e.target.value)}
      //               checked={selectedImage === "babyracoon"} 
      //             />
      //             <div className="selectCoverPage__cover--radioButton">
      //             <BookCoverPage text="Test 1" img={babyraccon} selectImage={handleSelectedImage} />
      //             {/* <p>New Born</p> */}
      //             </div>
      //      </label>

      //      <label className="selectCoverPage__img1" htmlFor="daisyChoice" >
      //             <input
      //               type="radio"
      //               id="daisyChoice"
      //               name="eventChoice"
      //               value="daisySummer"
      //               className="selectEvent__input"
      //               onChange={(e) => setSelectedImage(e.target.value)}
      //               checked={selectedImage === "daisySummer"} 
      //             />
      //             <div className="selectCoverPage__cover--radioButton">
      //             <BookCoverPage text="Test 2" img={daisySummer} selectImage={handleSelectedImage}/>
      //             {/* <p>New Born</p> */}
      //             </div>
      //      </label>   
     
        
        
      //   <BookCoverPage text="Test 3" img={paperSwan} selectImage={handleSelectedImage}/>
      //   <BookCoverPage text="Test 4" img={lotusFlower} selectImage={handleSelectedImage}/>
      //   <BookCoverPage text="Test 5" img={colorSpalsh} selectImage={handleSelectedImage}/>
      //   <BookCoverPage text="Test 6" img={cartoonAnimals} selectImage={handleSelectedImage}/> 
       
      //   </div>
      //   <div className="selectCoverPage__nextButton">
      //     <button type="submit" className="rounded-button">Next</button>
      //     </div >
      //   </form>

        
      //   </div>

      <div>
      <div className="selectCoverPage__header">Select a Book Cover Image:</div>
      <div className="image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image ${selectedImage === image ? 'selected' : ''}`}
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="selectCoverPage__submitButton"><button onClick={handleSubmit} className="rounded-button">Submit</button></div>
    </div>
  )
}

export default SelectCoverPage