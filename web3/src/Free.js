import React from "react";
import "./free.css";
import rr from "./icons/rr.svg";
import srh from "./icons/srh.svg";
import Countdown from "./Countdown";
import Free2 from "./Free2";
const Free = () => {
  return (
    <>
      <div className="freeparent">
        <div className="fparent">
          <div className="free1">
            <div className="fparent1">
              <img src={rr} alt="rr_image" />
              <h3>&nbsp;&nbsp;&nbsp;&nbsp;RR</h3>
            </div>
            <h3>Rajasthan Royals</h3>
          </div>
          <Countdown />
          <div className="free2">
            <div className="fparent2">
              <h3>SRH&nbsp;&nbsp;&nbsp;&nbsp;</h3>
              <img src={srh} alt="srh_image" />
            </div>
            <h3>Sunrises Hyderabad</h3>
          </div>
        </div>
        <div className="footer">
          <h3>₹25 Lakh</h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3> Indian premier leauge</h3>
        </div>
      </div>
      <Free2/>
    </>
  );
};
export default Free;
