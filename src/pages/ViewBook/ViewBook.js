import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import "./ViewBook.scss";
import GetBook from "../../components/GetBook/GetBook";
import BackButton from "../../components/BackButton/BackButton";

function ViewBook() {
  const [images, SetImages] = useState([]);
  const [coverPic, SetCoverPic] = useState([null]);
  const { userId, bookId } = useParams();

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 368,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //Write function to get images from a book

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/${userId}/viewbook/${bookId}/images`
      )
      .then((data) => {
        SetImages(data.data);
      });
  }, [userId, bookId]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/${userId}/viewbook/${bookId}`
      )
      .then((data) => {
        SetCoverPic(data.data[0].cover_pic);
      });
  }, []);

  return (
    <div className="mainApp__container">
      <BackButton />
      <h1>
        <GetBook book={bookId} />
      </h1>
      <Slider {...settings}>
        <div className="card">
          <img src={coverPic} className="w-100" width="100%" height="500px" alt="cover-pic"/>
          {/* <h3>Milestone</h3>
                <p>text</p> */}
        </div>

        {images.map((image) => (
          <div className="card">
            <img
              src={image.url}
              className="w-100"
              width="100%"
              height="500px"
              alt="book-pics"
            />
            {/* <h3>Milestone</h3>
                <p>text</p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ViewBook;
