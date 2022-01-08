import React, { useState } from "react";
import './header.css';
import rr from './icons/rr.svg';
import srh from './icons/srh.svg';
let count=0;
const Header = () => {
    let daysIndex = { 0:'Sun', 1:'Mon', 2:'Tue', 3:'Wed', 4:'Thu', 5:'Fri', 6:'Sat' }
    // Wed,2 Apr,2021 7:00 PM
    let date= new Date();
    let day=date.getDay();
    let cdate=date.getDate();
    let month=date.getMonth();
    let year=date.getFullYear().toString();
    let time=date.getHours();
    let ampm="AM";
    if(Number(time)>12){
        ampm="PM";
    }
    let minute=date.getMinutes();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let fulldate_time=daysIndex[day]+", "+cdate+" "+months[month]+"' "+year[2]+year[3]+", "+Number(time)%12+":"+minute+" "+ampm;
    const [state,setState]=useState("far fa-star")
    const favourite=()=>{
        if(count===0){
            count=1
            setState(()=>{
                return "far fa-star"})           
        }else{
            count=0
            setState(()=>{
                return "fas fa-star"});
          alert("Match added to favourite");
        }
        
    }
  return (
    <>
      <div className="header-top">
        <div className="arrow">
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="headerContent">
          <div className="items">
            <h1>Indian premier league</h1>
            <h3>{fulldate_time}</h3>
          </div>
          <div className="star" >
            <i className= {state} onClick={favourite}></i>
          </div>
        </div>
        <div className="teams">
            <div className="team1">
                <img src={rr} alt="rr image"/>
                <h3>Rajasthan Royals</h3>
            </div>
            <div>
                <p>vs</p>
            </div>
            <div className="team2">
            <img src={srh} alt="srh image"/>
            <h3>Sunrises Hyderabad</h3>
            </div>
        </div>
      </div>
    </>
  );
};
export default Header;
