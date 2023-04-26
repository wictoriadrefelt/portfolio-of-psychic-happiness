import React from "react";
import { DatePicker__UNSTABLE } from "react95";
import styled from "styled-components";

function Datepicker({ isOpen, onClose, onAccept }) {
  return (
    <div className="cock" isOpen={isOpen}>
      <DatePicker__UNSTABLE onAccept={onAccept} />
      <button onClick={onClose}>Close datepicker</button>
    </div>
  );
}

export default Datepicker;
