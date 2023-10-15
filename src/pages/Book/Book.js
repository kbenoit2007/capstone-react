import React from "react";
import { useState } from "react";
import axios from "axios";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { useParams } from "react-router-dom";

function Book() {
  const [bookName, setBookName] = useState("");
  const [bookDesc, setBookDesc] = useState("");

  const { userId, bookId } = useParams();

  async function handleSubmit(event) {
    event.preventDefault();

    const bookObject = {
      id: bookId,
      name: bookName,
      description: bookDesc,
      user_id: userId,
    };

    console.log(bookObject);

    try {
      await axios
        .post(
          `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/books`,
          bookObject
        )
        .then((data) => {});
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="mainApp__container">
      <h1>Your Book</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <label>Description</label>
        <input
          type="text"
          onChange={(e) => {
            setBookDesc(e.target.value);
          }}
        />
        <button type="Submit">Submit </button>
      </form>

      <ImageUpload bookId={bookId} />
    </div>
  );
}

export default Book;
