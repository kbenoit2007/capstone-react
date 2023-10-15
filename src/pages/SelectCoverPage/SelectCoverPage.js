import React, { useState, useEffect } from "react";
import "./SelectCoverPage.scss";
import BookCoverPage from "../../components/BookCoverPage/BookCoverPage";
import babyraccon from "../../assets/bookcovers/baby-racoon.jpeg";
import daisySummer from "../../assets/bookcovers/daisy-summer.jpg";
import paperSwan from "../../assets/bookcovers/Adobe3-1682786385.jpeg";
import lotusFlower from "../../assets/bookcovers/lotus-flower-4k-9p.jpg";
import colorSpalsh from "../../assets/bookcovers/color-splash.jpeg";
import cartoonAnimals from "../../assets/bookcovers/cartoonAnimals.jpg";
import BookDetailsPage from "../BookDetailsPage/BookDetailsPage";

function SelectCoverPage({ onNextClick }) {
  const defaultImage =
    `${process.env.REACT_APP_URL}:${process.env.REACT_APP_CURRENTPORT}` +
    babyraccon;
  const [nextButtonData, setNextButtonData] = useState();
  const [currentImage, setCurrentImage] = useState();

  const handleSelectedImage = (image) => {
    setSelectedImage(image);
    console.log("is selected " + selectedImage);
  };

  const handleSubmitEvent = () => {};

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
      onNextClick("BookDetailsPage", selectedImage);
    } else {
      alert("Please select an image before submitting.");
    }
  };

  return (
    <div>
      <div className="selectCoverPage__header">Select a Book Cover Image:</div>
      <div className="image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image ${selectedImage === image ? "selected" : ""}`}
            onClick={() => handleImageClick(image)}
          >
            <img
              className="selectCoverPage__image"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="selectCoverPage__submitButton">
        <button onClick={handleSubmit} className="rounded-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default SelectCoverPage;
