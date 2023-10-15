import React from "react";
import TimeStampToDate from "../TimeStampToDate/TimeStampToDate";

function AgeTile({ age, birthday, name }) {
  const timestampDifference = (time) => {
    const now = new Date();
    const newTimeDifference = (new Date().getTime() - time) / 1000;
    return newTimeDifference;
  };

  const finalTimeDifference = (seconds) => {
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;

    const years = Math.floor(seconds / year);
    const months = Math.floor((seconds % year) / month);
    const days = Math.floor((seconds % month) / day);
    const hours = Math.floor((seconds % day) / hour);
    const minutes = Math.floor((seconds % hour) / minute);
    const remainingSeconds = seconds % minute;

    if (years > 0) {
      return `${years} years old`;
    }
    if (months > 0) {
      return `${months} months old`;
    }
    if (days > 0) {
      return `${days} days old`;
    }
    if (hours > 0) {
      return `${hours} hours old`;
    }
    if (minutes > 0) {
      return `${minutes} mins old`;
    } else {
      return `${remainingSeconds + 1} secs old`;
    }
  };

  const currentAge = finalTimeDifference(timestampDifference(birthday));

  return (
    <>
      <div className="tile__age">{currentAge}</div>
      <div>
        {`${name} birthday:`}
        <TimeStampToDate timeStamp={birthday} />
      </div>
    </>
  );
}

export default AgeTile;
