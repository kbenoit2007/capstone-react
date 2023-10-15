import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./NewBorn.scss";

function NewBorn({ selectEventData, newBornData }) {
  const [babyName, setBabyName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeStamp, setSelectedTimeStamp] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("just clicked submit " + babyName + birthDate);

    if (!e.target[0].value) {
      document.getElementById("BabyName").classList.add("inputError");
    } else {
      document.getElementById("BabyName").classList.remove("inputError");
    }
    if (!e.target[1].value) {
      document.getElementById("Birthday").classList.add("inputError");
    } else {
      document.getElementById("Birthday").classList.remove("inputError");
    }

    if (babyName === "" || birthDate === null) {
    } else {
      console.log("the baby name failed is " + babyName);
      console.log("the birthDate failed is " + birthDate);
      const detailsObject = {
        user_id: selectEventData[1],
        babyname: babyName,
        birthdate: selectedTimeStamp,
      };
      axios
        .post(
          `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/new/info`,
          detailsObject
        )
        .then((res) => {
          const data = { ...detailsObject };
          newBornData("TellUsMore", data);
        });
    }
  };

  const handleBabyName = (e) => {
    setBabyName(e.target.value);
  };

  const handleDateChange = (date) => {
    setBirthDate(date);
    setSelectedTimeStamp(dateToTimestamp(date));
  };

  const dateToTimestamp = (date) => {
    if (date === null) {
    } else {
      return date.getTime();
    }
  };

  return (
    <>
      <div className="newBornPage__container">
        <div className="newBornPage__header">Baby Details</div>

        <form onSubmit={handleSubmit}>
          <div className="newBornPage__inputContainer">
            <div>
              <label
                className="newBornPage__labels"
                htmlFor="BabyName"
              >{`Name`}</label>
              <input
                type="text"
                id="BabyName"
                placeholder="Enter Your Baby's Name"
                className="newBornPage__name textInputStyle"
                onChange={handleBabyName}
              ></input>
            </div>

            <div>
              <label className="newBornPage__labels" htmlFor="Birthday">
                BirthDay
              </label>
              <DatePicker
                id="Birthday"
                selected={birthDate}
                dateFormat="MMMM dd, yyyy"
                className="newBornPage__date textInputStyle"
                onChange={handleDateChange}
              />
            </div>
            <button
              className="newBornPage__submitButton rounded-button"
              type="Submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewBorn;
