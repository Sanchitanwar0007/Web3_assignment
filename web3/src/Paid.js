import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import rr from "./icons/rr.svg";
import srh from "./icons/srh.svg";
import  "./paid.css";
const Paid = () => {

  return (
    <>
      <div className="parent">
        <div className="paid">
          <div className="paid1">
            <img src={rr} alt="rr img" />
            <img src={srh} alt="srh img" />
          </div>
          <div className="paid2">
            <h3>Rajasthan Royals</h3>
            <h3>Sunrises Hyderabad</h3>
          </div>
        </div>
        <hr></hr>
        <div className="count">
            <Countdown/>
            <h3>₹25 Lakhs</h3>
        </div>
      </div>
    </>
  );
};
export default Paid;
