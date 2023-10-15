import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TellUsMore.scss";
import Questions from "../Questions/Questions";

function TellUsMore({ newBornData }) {
  const [dataToExport, setDataToExport] = useState("");

  const navigate = useNavigate();
  const { userId } = useParams();

  const handleSubmit = () => {

    navigate(`/user/${userId}`);
  };

  const handleQuestionsData = (data) => {
    setDataToExport(data);
  };
  return (
    <>
      <div className="tellUsMore__container">
        <div className="tellUsMore__header">Tell Us More</div>
        <Questions
          name={newBornData.babyname}
          questionsData={handleQuestionsData}
        />

        <div>
          <button onClick={handleSubmit} className="rounded-button">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default TellUsMore;
