import React from "react";
import "./GetBook.scss";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function GetBook(props) {
  const [bookData, SetBookData] = useState("");
  const { userId, bookId } = useParams();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/${userId}/viewbook/${props.book}`
      )
      .then((data) => {
        SetBookData(data);
      });
  }, []);

  return (
    <>
      {bookData.data && (
        <div>
          {bookData.data.map((book) => (
            <div>{book.name}</div>
          ))}
        </div>
      )}
    </>
  );
}

export default GetBook;
