import axios from "axios";
import { useState } from "react";

function CreateBook() {
  const [bookName, setBookName] = useState("");
  const [bookDesc, setBookDesc] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const bookObject = {
      name: bookName,
      description: bookDesc,
    };

    try {
      await axios
        .post(
          `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/book`,
          bookObject
        )
        .then((data) => {
          console.log(data);
          console.log(JSON.stringify(data.data[0].id));
        });
    } catch (err) {
      console.error(err);
    }
  }
}
return (
  <>
    Click Here to Create your Book
    <div>
      <form onSubmit={handleSubmit}>
        <label>Book Name</label>
        <input
          type="text"
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <label>Book Description</label>
        <input
          type="text"
          onChange={(e) => {
            setBookDesc(e.target.value);
          }}
        />
        <button type="Submit">Submit </button>
      </form>
    </div>
  </>
);

export default CreateBook;
