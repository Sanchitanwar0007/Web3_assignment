import React from "react";
import "./free.css";
import rr from "./icons/rr.svg";
import srh from "./icons/srh.svg";
import Countdown from "./Countdown";
const Free2 = () => {
  return (
    <>
      <div className="freeparent">
        <div className="fparent">
          <div className="free1">
            <div className="fparent1">
              <img src={rr} alt="rr_image" />
              
            </div>
            <h3>Rajasthan Royals</h3>
          </div>
          <h3>VS</h3>
          <div className="free2">
            <div className="fparent2">
              
              <img src={srh} alt="srh_image" />
            </div>
            <h3>Sunrises Hyderabad</h3>
          </div>
        </div>
        <div className="footer">
          <h3>₹25 Lakh</h3>
            <Countdown/>
          
          <h3> Indian premier leauge</h3>
        </div>
      </div>
    </>
  );
};
export default Free2;
