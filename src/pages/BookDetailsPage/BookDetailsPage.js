import React from "react";
import "./BookDetailsPage.scss";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams} from "react-router-dom";

function BookDetails({ selectCoverPageData, onSelectClickNext }) {
  const [bookName, setBookName] = useState();
  const [bookDesc, setBookDesc] = useState();
  const [errorBabyName, setBabyNameError] = useState(true);
  const [errorDesc, setDescError] = useState(true);

  const { userId } = useParams();

  const handleBookName = (event) => {
    setBookName(event.target.value);
  };

  const handleDesc = (event) => {
    setBookDesc(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!event.target[0].value) {
      document.getElementById("bookname-input").classList.add("inputError");
      setBabyNameError(true);
    } else {
      document.getElementById("bookname-input").classList.remove("inputError");
      setBabyNameError(false);
    }

    if (!event.target[1].value) {
      document.getElementById("desc-input").classList.add("inputError");
      setDescError(true);
    } else {
      document.getElementById("desc-input").classList.remove("inputError");
      setDescError(false);
    }

    if (!bookDesc && !bookName == "") {
      console.error(errorBabyName,errorDesc)
    } else {
      console.log("the user id is " + userId);
      console.log("the new uuid for book is " + uuidv4());
      const bookObject = {
        id: uuidv4(),
        name: bookName,
        description: bookDesc,
        user_id: userId,
        cover_pic: selectCoverPageData,
      };
      try {
        await axios
          .post(
            `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/books`,
            bookObject
          )
          .then((data) => {
            console.log(data);
            console.log(JSON.stringify(data.data[0].id));
            onSelectClickNext("ImageUpload", bookObject);
          });
      } catch (err) {
        console.error(err);
      }
    }
  }

  const handleNextClick = () => {};

  return (
    <div className="bookDetails__container">
      <div className="bookDetails__header">Enter your Book Details:</div>

      <div className="bookDetails__LRContainer">
        <div className="bookDetails__leftContainer">
          <div>
            <div className="bookDetails__bookCoverText">{bookName}</div>
            <div className="bookDetails__bookCoverText--desc">{bookDesc}</div>
            <div className="bookDetails__bookCoverBar"></div>
            <img
              src={selectCoverPageData}
              className="bookDetails__bookCoverImage"
              alt="book-cover"
            />
          </div>
        </div>
        <div className="bookDetails__rightContainer">
          <div className="bookDetails__inputContainer">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="bookDetails__inputLabel--bookName">
                  Book Name:
                </label>
                <input
                  className="bookDetails__input textInputStyle"
                  id="bookname-input"
                  type="text"
                  placeholder="Enter Book Name"
                  onChange={handleBookName}
                />
              </div>
              <div>
                <label className="bookDetails__inputLabel--Desc">
                  Book Description:
                </label>
                <input
                  className="bookDetails__input textInputStyle"
                  type="text"
                  id="desc-input"
                  placeholder="Enter Description"
                  onChange={handleDesc}
                />
              </div>

              <div className="bookDetails__submitButton">
                <button className="rounded-button" type="Submit">
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
