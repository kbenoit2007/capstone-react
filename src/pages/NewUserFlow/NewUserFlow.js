import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewUserFlow.scss";
import { useParams } from "react-router-dom";
import SelectEvent from "../../components/SelectEvent/SelectEvent";
import NewBorn from "../../components/NewBorn/NewBorn";
import TellUsMore from "../../components/TellUsMore/TellUsMore";

function NewUserFlow() {
  const [firstStepData, setFirstStepData] = useState("");
  const [firstStepStatus, setFirstStepStatus] = useState("");
  const [event, setEvent] = useState("");
  const [newBornData, setNewBornData] = useState("");
  const [tellUsMoreData, setTellUsMoreData] = useState("");
  const { userId } = useParams();

  const [activePage, setActivePage] = useState("SelectEvent");

  const handleNextClick = (component, data) => {
    console.log("user clicked next " + data);
    console.log("component is " + component);
    setActivePage(component);
    setFirstStepData([data.event, data.user_id]);
  };
  const handleNewBornClick = (component, data) => {
    setActivePage(component);
    setNewBornData(data);
  };

  const handleTellUsMoreClick = (component, data) => {
    setActivePage(component);
    setTellUsMoreData([data.user_id]);
  };

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/new`
      )
      .then((res) => {
        // console.log(res)
        if (res.data.Status === "New Born") {
        } else {
        }
      });
  }, []);

  return (
    <div className="mainApp__container">
      {activePage === "SelectEvent" && (
        <SelectEvent onNextClick={handleNextClick} />
      )}
      {activePage === "NewBorn" && (
        <NewBorn
          selectEventData={firstStepData}
          newBornData={handleNewBornClick}
        />
      )}
      {activePage === "TellUsMore" && (
        <TellUsMore
          newBornData={newBornData}
          tellUsMoreData={handleTellUsMoreClick}
        />
      )}
    </div>
  );
}

export default NewUserFlow;
