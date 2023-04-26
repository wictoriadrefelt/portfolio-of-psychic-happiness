import React, { useState, useEffect } from "react";
import "./Clock.css";
import Datepicker from "./Datepicker";

function Clock() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleDateAccept = (date) => {
    console.log(date);
    handleClose();
  };
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <button className="clock" onClick={handleOpen}>
      <Datepicker
        isOpen={isOpen}
        onClose={handleClose}
        onAccept={handleDateAccept}
      />
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </button>
  );
}

export default Clock;
