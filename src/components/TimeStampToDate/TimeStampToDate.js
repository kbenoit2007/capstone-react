import React, { useState, useEffect } from "react";

function TimeStampToDate({ timeStamp }) {
  const [newDate, setNewDate] = useState("");

  const newTimeStamp = Number(timeStamp);

  const convertUnixTimeToReadableDate = (newTimeStamp) => {
    const date = new Date(newTimeStamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleString(undefined, options);
  };

  const formattedDate = convertUnixTimeToReadableDate(newTimeStamp);

  useEffect(() => {
    setNewDate(formattedDate);
  }, []);

  return <>{newDate}</>;
}
export default TimeStampToDate;
